'use strict';

import PredatorsController from './predators_controller';
import PreysController from './preys_controller';
import Field from './field';

export default class Zoo {
  constructor(
    predatorsParams,
    rabbitsParams,
    preysParams,
    predatorFieldParams,
    preyFieldParams,
    panoramaSize
  ) {
    this.panoramaSize = panoramaSize;
    this.foxesController = new PredatorsController(
      predatorsParams,
      panoramaSize
    );
    this.rabbitsController = new PredatorsController(
      rabbitsParams,
      panoramaSize
    );
    this.preysController = new PreysController(preysParams, panoramaSize);
    this.foxesField = new Field(predatorFieldParams, panoramaSize, -1);
    this.rabbitsField = new Field(predatorFieldParams, panoramaSize, -1);
    this.preysField = new Field(preyFieldParams, panoramaSize, 1);
  }

  updateOrganisms({ predatorsParams, preysParams }) {
    this.foxesController.updatePredatorsParams(predatorsParams);
    this.rabbitsController.updatePredatorsParams(predatorsParams);
    this.preysController.updatePreysParams(preysParams);
  }

  updatePreysField(preyFieldParams) {
    this.preysField.updateFieldParams(preyFieldParams);
  }

  tick() {
    this.feed();
    this.starve();
    this.calculateFields();
    this.moveOrganisms();
    this.reproduce();
  }

  moveOrganisms() {
    this.movePredators();
    this.movePrey();
  }

  movePredators() {
    this.foxesController.moveOrganisms(this.panoramaSize, this.preysField);
    this.rabbitsController.moveOrganisms(this.panoramaSize, this.preysField);
  }

  movePrey() {
    // this.preysController.moveOrganisms(this.panoramaSize, this.foxesField);
  }

  calculateFields() {
    this.calculatePredatorsField();
    this.calculatePreysField();
  }

  calculatePredatorsField() {
    this.foxesField.calculateField(this.foxesController);
    this.rabbitsField.calculateField(this.rabbitsController);
  }

  calculatePreysField() {
    this.preysField.calculateField(this.preysController);
  }

  // construct a hash of preys' locations on the field grid, with
  // coords pointing to the top prey on a given tile (O(preys) time)
  // Then, each predator can check the hash at its own location to
  // find food (O(predators) time). Total: O(predators + preys)
  feed() {
    const preysLocations = this.calculatePreysLocations();
    const foxesEaten = this.foxesController.feed(
      preysLocations,
      this.preysField.fieldNetSize
    );
    const rabbitsEaten = this.rabbitsController.feed(
      preysLocations,
      this.preysField.fieldNetSize
    );
    const eaten = [...foxesEaten, ...rabbitsEaten];
    this.preysController.killOrganisms(eaten);
  }

  calculatePreysLocations() {
    return this.preysController.revealLocations(this.preysField.fieldNetSize);
  }

  starve() {
    this.foxesController.starvePredators();
    this.rabbitsController.starvePredators();
    this.preysController.starvePreys();
  }

  reproduce() {
    if (!this.unpauseTimestamp) {
      this.foxesController.reproducePredators(this.panoramaSize);
      this.rabbitsController.reproducePredators(this.panoramaSize);
      this.preysController.reproducePreys(this.panoramaSize);
    } else if (Date.now() > this.unpauseTimestamp) {
      delete this.unpauseTimestamp;
    }
  }

  unpause(pauseTimestamp) {
    this.unpauseTimestamp = 2 * Date.now() - pauseTimestamp;
    this.foxesController.unpause(pauseTimestamp);
    this.rabbitsController.unpause(pauseTimestamp);
  }
}

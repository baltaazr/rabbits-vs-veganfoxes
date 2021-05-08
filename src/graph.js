import { fitToAxis } from '../util/util';

export default class Graph {
  constructor(graphCanvas, simulationParams) {
    this.graphCanvas = graphCanvas;
    this.canvasSize = {
      x: graphCanvas.width,
      y: graphCanvas.height
    };
    this.ctx = graphCanvas.getContext('2d');
    this.carryingCapacity = 100;
    this.lastCoords = [
      {
        foxesCount: simulationParams.predatorCount,
        rabbitsCount: simulationParams.rabbitCount
      }
    ];
    this.lastDraw = Date.now();
    this.foxColor = simulationParams.predatorColor;
    this.rabbitColor = simulationParams.rabbitColor;
  }

  draw(zoo) {
    if (Date.now() - this.lastDraw > 1000) {
      this.updateDatapoints(zoo);
      this.ctx.clearRect(0, 0, this.canvasSize.x, this.canvasSize.y);
      this.drawData();
      this.drawAxes();
      this.lastDraw = Date.now();
    }
  }

  updateDatapoints(zoo) {
    const foxesCount = zoo.foxesController.organisms.length;
    const rabbitsCount = zoo.rabbitsController.organisms.length;
    this.lastCoords.push({
      foxesCount,
      rabbitsCount
    });
    if (this.lastCoords.length > 100) {
      this.lastCoords = this.lastCoords.slice(1);
    }
  }

  drawData() {
    this.drawFoxData();
    this.drawRabbitData();
  }

  drawFoxData() {
    const xIncrement = Math.floor(this.canvasSize.x / 100);
    let xCoord = 0;
    this.ctx.strokeStyle = this.foxColor;
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(
      xCoord,
      this.canvasSize.y -
        fitToAxis(
          this.lastCoords[0].foxesCount,
          this.carryingCapacity,
          this.canvasSize.y
        )
    );
    xCoord += xIncrement;
    this.lastCoords.slice(1).forEach((coord, idx) => {
      this.ctx.lineTo(
        xCoord,
        this.canvasSize.y -
          fitToAxis(coord.foxesCount, this.carryingCapacity, this.canvasSize.y)
      );
      this.ctx.stroke();
      xCoord += xIncrement;
    });
  }

  drawRabbitData() {
    const xIncrement = Math.floor(this.canvasSize.x / 100);
    let xCoord = 0;
    this.ctx.strokeStyle = this.rabbitColor;
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(
      xCoord,
      this.canvasSize.y -
        fitToAxis(
          this.lastCoords[0].rabbitsCount,
          this.carryingCapacity,
          this.canvasSize.y
        )
    );
    // debugger;
    xCoord += xIncrement;
    this.lastCoords.slice(1).forEach((coord, idx) => {
      this.ctx.lineTo(
        xCoord,
        this.canvasSize.y -
          fitToAxis(
            coord.rabbitsCount,
            this.carryingCapacity,
            this.canvasSize.y
          )
      );
      this.ctx.stroke();
      xCoord += xIncrement;
    });
  }

  drawAxes() {
    this.ctx.strokeStyle = '#ffffff';
    this.ctx.lineWidth = 2;

    // x-axis
    this.ctx.beginPath();
    this.ctx.moveTo(0, this.canvasSize.y - 1);
    this.ctx.lineTo(this.canvasSize.x, this.canvasSize.y - 1);
    this.ctx.stroke();

    // y-axis
    this.ctx.beginPath();
    this.ctx.moveTo(1, 0);
    this.ctx.lineTo(1, this.canvasSize.y);
    this.ctx.stroke();
  }

  updateOrganisms({ carryingCapacity }) {
    this.carryingCapacity = carryingCapacity;
  }
}

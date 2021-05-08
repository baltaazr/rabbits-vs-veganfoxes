(()=>{var t={705:(t,e,i)=>{var s=i(639).Symbol;t.exports=s},932:t=>{t.exports=function(t,e){for(var i=-1,s=null==t?0:t.length,r=Array(s);++i<s;)r[i]=e(t[i],i,t);return r}},286:t=>{t.exports=function(t){return t.split("")}},239:(t,e,i)=>{var s=i(705),r=i(607),a=i(333),o=s?s.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":o&&o in Object(t)?r(t):a(t)}},259:t=>{t.exports=function(t,e,i){var s=-1,r=t.length;e<0&&(e=-e>r?0:r+e),(i=i>r?r:i)<0&&(i+=r),r=e>i?0:i-e>>>0,e>>>=0;for(var a=Array(r);++s<r;)a[s]=t[s+e];return a}},531:(t,e,i)=>{var s=i(705),r=i(932),a=i(469),o=i(448),n=s?s.prototype:void 0,h=n?n.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(a(e))return r(e,t)+"";if(o(e))return h?h.call(e):"";var i=e+"";return"0"==i&&1/e==-1/0?"-0":i}},180:(t,e,i)=>{var s=i(259);t.exports=function(t,e,i){var r=t.length;return i=void 0===i?r:i,!e&&i>=r?t:s(t,e,i)}},805:(t,e,i)=>{var s=i(180),r=i(689),a=i(140),o=i(833);t.exports=function(t){return function(e){e=o(e);var i=r(e)?a(e):void 0,n=i?i[0]:e.charAt(0),h=i?s(i,1).join(""):e.slice(1);return n[t]()+h}}},957:(t,e,i)=>{var s="object"==typeof i.g&&i.g&&i.g.Object===Object&&i.g;t.exports=s},607:(t,e,i)=>{var s=i(705),r=Object.prototype,a=r.hasOwnProperty,o=r.toString,n=s?s.toStringTag:void 0;t.exports=function(t){var e=a.call(t,n),i=t[n];try{t[n]=void 0;var s=!0}catch(t){}var r=o.call(t);return s&&(e?t[n]=i:delete t[n]),r}},689:t=>{var e=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");t.exports=function(t){return e.test(t)}},333:t=>{var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},639:(t,e,i)=>{var s=i(957),r="object"==typeof self&&self&&self.Object===Object&&self,a=s||r||Function("return this")();t.exports=a},140:(t,e,i)=>{var s=i(286),r=i(689),a=i(676);t.exports=function(t){return r(t)?a(t):s(t)}},676:t=>{var e="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",i="\\ud83c[\\udffb-\\udfff]",s="[^\\ud800-\\udfff]",r="(?:\\ud83c[\\udde6-\\uddff]){2}",a="[\\ud800-\\udbff][\\udc00-\\udfff]",o="(?:"+e+"|"+i+")?",n="[\\ufe0e\\ufe0f]?",h=n+o+"(?:\\u200d(?:"+[s,r,a].join("|")+")"+n+o+")*",d="(?:"+[s+e+"?",e,r,a,"[\\ud800-\\udfff]"].join("|")+")",c=RegExp(i+"(?="+i+")|"+d+h,"g");t.exports=function(t){return t.match(c)||[]}},403:(t,e,i)=>{var s=i(833),r=i(700);t.exports=function(t){return r(s(t).toLowerCase())}},469:t=>{var e=Array.isArray;t.exports=e},5:t=>{t.exports=function(t){return null!=t&&"object"==typeof t}},448:(t,e,i)=>{var s=i(239),r=i(5);t.exports=function(t){return"symbol"==typeof t||r(t)&&"[object Symbol]"==s(t)}},833:(t,e,i)=>{var s=i(531);t.exports=function(t){return null==t?"":s(t)}},700:(t,e,i)=>{var s=i(805)("toUpperCase");t.exports=s}},e={};function i(s){var r=e[s];if(void 0!==r)return r.exports;var a=e[s]={exports:{}};return t[s](a,a.exports,i),a.exports}i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";class t{constructor(){this.predatorCount=20,this.rabbitCount=30,this.predatorSpeed=15,this.predatorRadius=20,this.predatorGravitationNbhd=10,this.predatorColor="#354b6d",this.rabbitColor="#d850d1",this.predatorEfficiency=1e4,this.predatorPerception=25,this.predatorReproductionPeriod=12e3,this.preyCount=50,this.preySpeed=0,this.preyRadius=10,this.preyGravitationNbhd=20,this.preyColor="#efe092",this.preyPerception=7,this.preyCamoflage=.5,this.preyReproductionPeriod=5e3,this.preyCarryingCapacity=500,this.fieldNetSize=10}predatorsParams(){return{count:this.predatorCount,predatorParams:{speed:this.predatorSpeed,radius:this.predatorRadius,color:this.predatorColor,efficiency:this.predatorEfficiency,perception:this.predatorPerception},reproductionPeriod:this.predatorReproductionPeriod}}rabbitsParams(){return{count:this.rabbitCount,predatorParams:{speed:this.predatorSpeed,radius:this.predatorRadius,color:this.rabbitColor,efficiency:this.predatorEfficiency,perception:this.predatorPerception},reproductionPeriod:this.predatorReproductionPeriod}}preysParams(){return{count:this.preyCount,preyParams:{speed:this.preySpeed,radius:this.preyRadius,color:this.preyColor,perception:this.preyPerception},reproductionPeriod:this.preyReproductionPeriod,carryingCapacity:this.preyCarryingCapacity}}predatorFieldParams(){return{fieldNetSize:this.fieldNetSize,gravitationNbhd:this.predatorGravitationNbhd}}preyFieldParams(){return{fieldNetSize:this.fieldNetSize,gravitationNbhd:Math.round(this.preyGravitationNbhd*this.preyCamoflage)}}}i(403),document.getElementById("predator-count"),document.getElementById("predator-speed"),document.getElementById("predator-perception"),document.getElementById("predator-efficiency"),document.getElementById("predator-reproduction"),document.getElementById("prey-count"),document.getElementById("prey-speed"),document.getElementById("prey-camoflage"),document.getElementById("prey-capacity"),document.getElementById("prey-reproduction"),document.getElementById("play-button"),document.getElementById("pause-button"),document.getElementById("restart-button");class e{constructor(t){this.ctx=t.getContext("2d"),this.img=new Image(3e3,750),this.img.onload=()=>{this.loaded=!0},this.img.src="https://s3-us-west-1.amazonaws.com/talons-dev/final-background-cropped.jpeg",this.loaded=!1,this.imageSize={width:this.img.width,height:this.img.height},console.log(this.imageSize),this.canvasSize={width:t.width,height:t.height}}draw(t){this.ctx.drawImage(this.img,-t,0),this.doesImageNeedStitching(t)&&this.ctx.drawImage(this.img,this.imageSize.width-t,0)}doesImageNeedStitching(t){return t>this.imageSize.width-this.canvasSize.width}}const s=(t,e)=>(t%e+e)%e,r=(t,e,i)=>{const s=Math.min(t,e),r=Math.max(t,e),a=r-s,o=s+i-r;return Math.min(a,o)},a=(t,e)=>Math.abs(e-t),o=(t,e,i,s,o)=>Math.sqrt(Math.pow(a(e,s),2)+Math.pow(r(t,i,o),2)),n=({x:t,y:e},i)=>({x:Math.floor(t/i),y:Math.floor(e/i)}),h=t=>0===t?100:Math.pow(t,-2),d=(t,e,i)=>t/e*i;class c{constructor(t){this.background=new e(t),this.ctx=t.getContext("2d"),this.panoramaSize=this.background.imageSize,this.canvasSize=this.background.canvasSize,this.dx=0,this.isDampening=!1,this.cursorOffsetX=0,this.setCanvasListeners(t)}draw(t){this.background.loaded&&(this.background.draw(this.dx),this.drawOrganisms(t.preysController),this.drawOrganisms(t.foxesController),this.drawOrganisms(t.rabbitsController))}drawOrganisms(t){t.organisms.forEach((t=>{this.drawOrganism(t)}))}drawOrganism(t){this.ctx.beginPath(),this.ctx.arc(s(t.center.x-this.dx,this.panoramaSize.width),t.center.y,t.radius,0,2*Math.PI),this.ctx.fillStyle=t.color,this.ctx.strokeStyle="#476189",this.ctx.fill(),this.ctx.lineWidth=5,this.ctx.stroke()}updateDx(){this.dampenStaleCursorInput(),this.dx+=.075*this.cursorOffsetX,this.dx=s(this.dx,this.panoramaSize.width)}toggleDampening(t){this.isDampening=t}dampenStaleCursorInput(){this.isDampening&&(this.cursorOffsetX=.8*this.cursorOffsetX,Math.abs(this.cursorOffsetX)<1&&(this.cursorOffsetX=0))}updateCursorOffset({x:t}){Math.abs(this.canvasSize.width/2-t)>this.canvasSize.width/3?(this.toggleDampening(!1),this.cursorOffsetX=t-this.canvasSize.width/2):this.toggleDampening(!0)}setCanvasListeners(t){t.addEventListener("mousemove",(e=>{const i=((t,e)=>{const i=t.getBoundingClientRect();return{x:e.clientX-i.left,y:e.clientY-i.top}})(t,e);this.updateCursorOffset(i)})),t.addEventListener("mouseout",(()=>{this.toggleDampening(!0)}))}}class l{constructor({speed:t,radius:e,color:i,perception:s},r){this.speed=t,this.radius=e,this.color=i,this.perception=s,this.initializeCenter(r),this.initializeDirection()}initializeCenter({width:t,height:e}){this.center={x:Math.random()*t,y:Math.random()*(e-2*this.radius)+this.radius}}initializeDirection(){const t=2*Math.random()*Math.PI;this.direction={x:Math.cos(t),y:Math.sin(t)}}moveOrganism({width:t,height:e}){this.center={x:s(this.center.x+this.dxdt(),t),y:this.center.y+this.dydt()},this.resolveBounces(e)}dydt(){return this.speed*this.direction.y}dxdt(){return this.speed*this.direction.x}minHeight(){return this.radius}maxHeight(t){return t-this.radius}resolveBounces(t){if(this.center.y>this.maxHeight(t)){const e=this.center.y-this.maxHeight(t);this.center.y-=e,this.direction.y=-1*this.direction.y}else if(this.center.y<this.minHeight()){const t=this.minHeight()-this.center.y;this.center.y+=t,this.direction.y=-1*this.direction.y}}updateDirection(t){const e=t.constructGradient(this),i=1/Math.sqrt(Math.pow(this.direction.x+e.x/this.perception,2)+Math.pow(this.direction.y+e.y/this.perception,2));this.direction.x=(this.direction.x+e.x/this.perception)*i,this.direction.y=(this.direction.y+e.y/this.perception)*i}}class p extends l{constructor(t,e){super(t,e),this.lastAte=Date.now(),this.efficiency=t.efficiency}updatePredatorParams({speed:t,efficiency:e,perception:i}){this.speed=t,this.efficiency=e,this.perception=i}feed(t){this.lastAte=Date.now()}unpause(t){this.lastAte+=t}}class u{constructor(t){this.organisms=[],this.lastReproduced=Date.now(),this.reproductionPeriod=t}moveOrganisms(t,e){this.updateDirections(e),this.organisms.forEach((e=>{e.moveOrganism(t)}))}updateDirections(t){this.organisms.forEach((e=>{e.updateDirection(t)}))}killOrganisms(t){t.forEach((t=>{const e=this.organisms.indexOf(t);this.organisms.splice(e,1)}))}}class m extends u{constructor({predatorParams:t,count:e,reproductionPeriod:i},s){super(i),this.predatorParams=t,this.populatePredators({predatorParams:t,count:e},s)}populatePredators({count:t,predatorParams:e},i){for(let s=0;s<t;s++)this.createPredator(e,i)}createPredator(t,e){const i=new p(t,e);this.organisms.push(i)}feed(t,e){const i=[];return this.organisms.forEach((s=>{const r=n(s.center,e),a=t[r.x]?t[r.x][r.y]:null;a&&(i.push(a),s.feed())})),Array.from(new Set(i))}starvePredators(){const t=[],e=Date.now();this.organisms.forEach((i=>{e-i.lastAte>i.efficiency&&t.push(i)})),this.killOrganisms(t)}reproducePredators(t){if(Date.now()-this.lastReproduced>this.reproductionPeriod){const e={count:this.organisms.length,predatorParams:this.predatorParams};this.populatePredators(e,t),this.lastReproduced=Date.now()}}updatePredatorsParams({predatorParams:t,reproductionPeriod:e}){this.predatorParams=t,this.reproductionPeriod=e,this.organisms.forEach((e=>{e.updatePredatorParams(t)}))}unpause(t){const e=Date.now()-t;this.organisms.forEach((t=>t.unpause(e)))}}class f extends l{constructor(t,e){super(t,e)}updatePreyParams({speed:t}){this.speed=t}}class y extends u{constructor({preyParams:t,count:e,reproductionPeriod:i,carryingCapacity:s},r){super(i),this.preyParams=t,this.carryingCapacity=s,this.populatePreys({count:e,preyParams:t},r)}populatePreys({count:t,preyParams:e},i){for(let s=0;s<t;s++)this.createPrey(e,i)}createPrey(t,e){const i=new f(t,e);this.organisms.push(i)}revealLocations(t){const e={};return this.organisms.forEach((i=>{const s=n(i.center,t);e[s.x]=e[s.x]||[],e[s.x][s.y]=i})),e}reproducePreys(t){if(Date.now()-this.lastReproduced>this.reproductionPeriod){const e={count:this.organisms.length,preyParams:this.preyParams};this.populatePreys(e,t),this.lastReproduced=Date.now()}}starvePreys(){if(this.organisms.length>this.carryingCapacity){const t=Math.floor(this.organisms.length/2);this.organisms=this.organisms.slice(t)}}updatePreysParams({preyParams:t,reproductionPeriod:e,carryingCapacity:i}){this.preyParams=t,this.reproductionPeriod=e,this.carryingCapacity=i,this.organisms.forEach((e=>{e.updatePreyParams(t)}))}}class g{constructor({fieldNetSize:t,gravitationNbhd:e},{height:i,width:s},r){this.fieldSize={rowCount:Math.ceil(i/t),colCount:Math.ceil(s/t)},this.fieldNetSize=t,this.gravitationNbhd=e,this.sgn=r,this.initializeField(this.fieldSize)}initializeField({rowCount:t,colCount:e}){this.field=Array(t).fill(0).map((t=>Array(e).fill(0)))}resetField(){const t=Object.keys(this.field),e=t[Math.floor(t.length/2)];t.forEach((t=>{const i=Object.keys(this.field[t]),s=a(e,t);i.forEach((i=>{this.field[t][i]=s/e/1e3}))}))}calculateField(t){this.resetField(),t.organisms.forEach((t=>{this.updateField(t)}))}updateField(t){let e,i;({x:e,y:i}=this.fieldPosition(t));for(let t=i-this.gravitationNbhd;t<i+this.gravitationNbhd;t++)for(let r=e-this.gravitationNbhd;r<e+this.gravitationNbhd;r++){let a=r;if(t<0||t>=this.fieldSize.rowCount)continue;(a<0||a>=this.fieldSize.colCount)&&(a=s(a,Math.floor(this.fieldSize.colCount)));const n=this.sgn*h(o(e,i,a,t,this.fieldSize.colCount));this.field[t][a]+=n}}fieldPosition(t){return n(t.center,this.fieldNetSize)}constructGradient(t){let e,i;({x:e,y:i}=this.fieldPosition(t));const n={x:0,y:0};for(let t=i-this.gravitationNbhd;t<i+this.gravitationNbhd;t++)for(let d=e-this.gravitationNbhd;d<e+this.gravitationNbhd;d++){let c=d;if(t<0||t>=this.fieldSize.rowCount)continue;if(d===e||t===i)continue;c=s(c,this.fieldSize.colCount);const l=o(d,t,e,i,this.fieldSize.colCount),p=h(l),u=r(e,c,this.fieldSize.rowCount),m=a(i,t)/l,f=u/l,y=d>e?1:-1,g=t>i?1:-1;n.x+=this.field[t][c]*f*p*y,n.y+=this.field[t][c]*m*p*g}return n}updateFieldParams({fieldNetSize:t,gravitationNbhd:e}){this.fieldNetSize=t,this.gravitationNbhd=e}}class x{constructor(t,e,i,s,r,a){this.panoramaSize=a,this.foxesController=new m(t,a),this.rabbitsController=new m(e,a),this.preysController=new y(i,a),this.foxesField=new g(s,a,-1),this.rabbitsField=new g(s,a,-1),this.preysField=new g(r,a,1)}updateOrganisms({predatorsParams:t,preysParams:e}){this.foxesController.updatePredatorsParams(t),this.rabbitsController.updatePredatorsParams(t),this.preysController.updatePreysParams(e)}updatePreysField(t){this.preysField.updateFieldParams(t)}tick(){this.feed(),this.starve(),this.calculateFields(),this.moveOrganisms(),this.reproduce()}moveOrganisms(){this.movePredators(),this.movePrey()}movePredators(){this.foxesController.moveOrganisms(this.panoramaSize,this.preysField),this.rabbitsController.moveOrganisms(this.panoramaSize,this.preysField)}movePrey(){}calculateFields(){this.calculatePredatorsField(),this.calculatePreysField()}calculatePredatorsField(){this.foxesField.calculateField(this.foxesController),this.rabbitsField.calculateField(this.rabbitsController)}calculatePreysField(){this.preysField.calculateField(this.preysController)}feed(){const t=this.calculatePreysLocations(),e=[...this.foxesController.feed(t,this.preysField.fieldNetSize),...this.rabbitsController.feed(t,this.preysField.fieldNetSize)];this.preysController.killOrganisms(e)}calculatePreysLocations(){return this.preysController.revealLocations(this.preysField.fieldNetSize)}starve(){this.foxesController.starvePredators(),this.rabbitsController.starvePredators(),this.preysController.starvePreys()}reproduce(){this.unpauseTimestamp?Date.now()>this.unpauseTimestamp&&delete this.unpauseTimestamp:(this.foxesController.reproducePredators(this.panoramaSize),this.rabbitsController.reproducePredators(this.panoramaSize),this.preysController.reproducePreys(this.panoramaSize))}unpause(t){this.unpauseTimestamp=2*Date.now()-t,this.foxesController.unpause(t),this.rabbitsController.unpause(t)}}class P{constructor(t,e){this.graphCanvas=t,this.canvasSize={x:t.width,y:t.height},this.ctx=t.getContext("2d"),this.carryingCapacity=100,this.lastCoords=[{foxesCount:e.predatorCount,rabbitsCount:e.rabbitCount}],this.lastDraw=Date.now(),this.foxColor=e.predatorColor,this.rabbitColor=e.rabbitColor}draw(t){Date.now()-this.lastDraw>1e3&&(this.updateDatapoints(t),this.ctx.clearRect(0,0,this.canvasSize.x,this.canvasSize.y),this.drawData(),this.drawAxes(),this.lastDraw=Date.now())}updateDatapoints(t){const e=t.foxesController.organisms.length,i=t.rabbitsController.organisms.length;this.lastCoords.push({foxesCount:e,rabbitsCount:i}),this.lastCoords.length>100&&(this.lastCoords=this.lastCoords.slice(1))}drawData(){this.drawFoxData(),this.drawRabbitData()}drawFoxData(){const t=Math.floor(this.canvasSize.x/100);let e=0;this.ctx.strokeStyle=this.foxColor,this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.moveTo(e,this.canvasSize.y-d(this.lastCoords[0].foxesCount,this.carryingCapacity,this.canvasSize.y)),e+=t,this.lastCoords.slice(1).forEach(((i,s)=>{this.ctx.lineTo(e,this.canvasSize.y-d(i.foxesCount,this.carryingCapacity,this.canvasSize.y)),this.ctx.stroke(),e+=t}))}drawRabbitData(){const t=Math.floor(this.canvasSize.x/100);let e=0;this.ctx.strokeStyle=this.rabbitColor,this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.moveTo(e,this.canvasSize.y-d(this.lastCoords[0].rabbitsCount,this.carryingCapacity,this.canvasSize.y)),e+=t,this.lastCoords.slice(1).forEach(((i,s)=>{this.ctx.lineTo(e,this.canvasSize.y-d(i.rabbitsCount,this.carryingCapacity,this.canvasSize.y)),this.ctx.stroke(),e+=t}))}drawAxes(){this.ctx.strokeStyle="#ffffff",this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.moveTo(0,this.canvasSize.y-1),this.ctx.lineTo(this.canvasSize.x,this.canvasSize.y-1),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(1,0),this.ctx.lineTo(1,this.canvasSize.y),this.ctx.stroke()}updateOrganisms({carryingCapacity:t}){this.carryingCapacity=t}}class v{constructor(t,e,i){this.simulationParams=i,this.canvas=t,this.graphCanvas=e,this.graph=new P(e,i),this.panorama=new c(this.canvas),this.zoo=new x(this.simulationParams.predatorsParams(),this.simulationParams.rabbitsParams(),this.simulationParams.preysParams(),this.simulationParams.predatorFieldParams(),this.simulationParams.preyFieldParams(),this.panorama.panoramaSize),this.animationInterval=1e3/24}tick(t){this.ticker=window.requestAnimationFrame(this.tick.bind(this));const e=Date.now();e-this.nextRender>this.animationInterval&&(this.nextRender=e,this.panorama.updateDx(),this.zoo.tick(),this.panorama.draw(this.zoo),this.graph.draw(this.zoo))}begin(){this.nextRender=Date.now(),this.tick()}togglePlaying(t){t?(this.pauseTimestamp=this.pauseTimestamp||Date.now(),this.zoo.unpause(this.pauseTimestamp),delete this.pauseTimestamp,this.begin()):(this.pauseTimestamp=Date.now(),window.cancelAnimationFrame(this.ticker))}restart(){}}document.addEventListener("DOMContentLoaded",(function(e){const i=document.getElementById("canvas"),s=document.getElementById("graph"),r=new t,a=new v(i,s,r);a.begin(),document.addEventListener("visibilitychange",(()=>(t=>{document.hidden?t.togglePlaying(!1):t.togglePlaying(!0)})(a)))}))})()})();
//# sourceMappingURL=bundle.js.map
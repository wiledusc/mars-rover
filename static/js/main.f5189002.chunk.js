(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(4),o=a.n(r),s=a(7),l=a(1),u=a(2),c=function e(t,a){if(Object(u.a)(this,e),isNaN(parseInt(t)))throw new Error("Plateau Max X is invalid");if(isNaN(parseInt(a)))throw new Error("Plateau Max Y is invalid");this.maxX=t,this.maxY=a},h=a(6),d=function(){function e(t){if(Object(u.a)(this,e),!parseInt(t.maxX))throw new Error("Plateau Max X is invalid");if(!parseInt(t.maxY))throw new Error("Plateau Max Y is invalid");this.positionX=0,this.positionY=0,this.direction="N",this.plateauMaxX=t.maxX,this.plateauMaxY=t.maxY}return Object(h.a)(e,[{key:"startRover",value:function(e){var t=e.trim().split(" ");if(!this.validateInitialPosition(t))throw new Error("Rover initial position is invalid");this.positionX=parseInt(t[0].trim()),this.positionY=parseInt(t[1].trim()),this.direction=t[2].trim()}},{key:"validateInitialPosition",value:function(e){return 3===e.length&&(!(isNaN(parseInt(e[0]))||parseInt(e[0])<0)&&(!(isNaN(parseInt(e[1]))||parseInt(e[1])<0)&&-1!==["N","S","E","W"].indexOf(e[2])))}},{key:"sendCommands",value:function(e){var t=this;Object(s.a)(e).forEach((function(e){switch(e){case"L":t.rotateLeft();break;case"R":t.rotateRight();break;case"M":t.moveForward();break;default:throw new Error("Invalid Command: ".concat(e))}}))}},{key:"getCurrentPosition",value:function(){return"".concat(this.positionX," ").concat(this.positionY," ").concat(this.direction)}},{key:"showErrorMessage",value:function(){}},{key:"moveForward",value:function(){"N"===this.direction&&this.positionY<this.plateauMaxY?this.positionY++:"S"===this.direction&&this.positionY>0?this.positionY--:"E"===this.direction&&this.positionX<this.plateauMaxX?this.positionX++:"W"===this.direction&&this.positionX>0?this.positionX--:this.showErrorMessage()}},{key:"rotateLeft",value:function(){"N"===this.direction?this.direction="W":"S"===this.direction?this.direction="E":"E"===this.direction?this.direction="N":"W"===this.direction&&(this.direction="S")}},{key:"rotateRight",value:function(){"N"===this.direction?this.direction="E":"S"===this.direction?this.direction="W":"E"===this.direction?this.direction="S":"W"===this.direction&&(this.direction="N")}}]),e}(),v=function(){function e(t){Object(u.a)(this,e),this.errorMessages=[],this.field={},this.field=t}return Object(h.a)(e,[{key:"validatePlateau",value:function(){return(isNaN(parseInt(this.field.plateauMaxX))||0===parseInt(this.field.plateauMaxX))&&this.errorMessages.push("Plateau Max X is mandatory"),(isNaN(parseInt(this.field.plateauMaxY))||0===parseInt(this.field.plateauMaxY))&&this.errorMessages.push("Plateau Max Y is mandatory"),0===this.errorMessages.length}},{key:"validateRover1",value:function(){return""===this.field.initialPositionRover1&&this.errorMessages.push("Rover 1 initial position is mandatory"),""===this.field.commandsRover1&&this.errorMessages.push("Commands Rover 1 is mandatory"),0===this.errorMessages.length}},{key:"validateRover2",value:function(){return""===this.field.initialPositionRover2&&this.errorMessages.push("Rover 2 initial position is mandatory"),""===this.field.commandsRover2&&this.errorMessages.push("Commands Rover 2 is mandatory"),0===this.errorMessages.length}},{key:"getErrorMessage",value:function(){return this.errorMessages}}]),e}(),m=a(8);function p(e){if(!/[0-9 0-9 NSEWnsew]/.test(e.key))return e.preventDefault()}function f(e){if(!/[0-9]/.test(e.key))return e.preventDefault()}function E(e){if(!/[LRMlrm]/.test(e.key))return e.preventDefault()}function b(e){m.b.error("".concat(e),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})}a(15);var M=function(){var e=Object(i.useState)(""),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(i.useState)(""),u=Object(l.a)(o,2),h=u[0],M=u[1],R=Object(i.useState)(""),g=Object(l.a)(R,2),y=g[0],x=g[1],N=Object(i.useState)(""),P=Object(l.a)(N,2),O=P[0],w=P[1],C=Object(i.useState)(""),j=Object(l.a)(C,2),k=j[0],X=j[1],Y=Object(i.useState)(""),I=Object(l.a)(Y,2),S=I[0],L=I[1],W=Object(i.useState)(""),K=Object(l.a)(W,2),D=K[0],F=K[1],J=Object(i.useState)(""),B=Object(l.a)(J,2),H=B[0],V=B[1];function _(){F(""),V("")}return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"content"},n.a.createElement("p",null,"Mars Rover in JavaScript."),n.a.createElement(m.a,null),n.a.createElement("form",{id:"rover_form",onSubmit:function(e){e.preventDefault();var t=new v({plateauMaxX:a,plateauMaxY:h,initialPositionRover1:y,initialPositionRover2:O,commandsRover1:k,commandsRover2:S,outputRover1:D,outputRover2:H});if(t.validatePlateau()&&(t.validateRover1()||t.validateRover2()))try{var i=new c(a,h);t.validateRover1()&&function(e){var t=new d(e);t.startRover(y),t.sendCommands(k);var a=t.getCurrentPosition(k);F(a)}(i),t.validateRover2()&&function(e){var t=new d(e);t.startRover(O),t.sendCommands(S);var a=t.getCurrentPosition(S);V(a)}(i)}catch(r){b(r)}else{var n=t.getErrorMessage();Object(s.a)(n).forEach((function(e){b(e)}))}}},n.a.createElement("label",null,"Plateau max X and max Y:"),n.a.createElement("div",{className:"row"},n.a.createElement("input",{type:"text",id:"plateauMaxX",placeholder:"Max X",onKeyPress:f,value:a,onChange:function(e){_(),r(e.target.value)}}),n.a.createElement("input",{type:"text",id:"plateauMaxY",placeholder:"Max Y",onKeyPress:f,value:h,onChange:function(e){_(),M(e.target.value)}})),n.a.createElement("hr",null),n.a.createElement("br",null),n.a.createElement("label",null,"Rover 1"),n.a.createElement("div",{className:"row"},n.a.createElement("input",{type:"text",id:"initialPositionRover1",placeholder:"0 0 N - Initial Position",onKeyPress:p,value:y,onChange:function(e){_(),x(e.target.value)}}),n.a.createElement("input",{type:"text",id:"commandsRover1",placeholder:"LRM - Rover Commands",value:k,onKeyPress:E,onChange:function(e){_(),X(e.target.value)}})),n.a.createElement("hr",null),n.a.createElement("br",null),n.a.createElement("label",null,"Rover 2"),n.a.createElement("div",{className:"row"},n.a.createElement("input",{type:"text",id:"initialPositionRover2",placeholder:"0 0 N - Initial Position",onKeyPress:p,value:O,onChange:function(e){_(),w(e.target.value)}}),n.a.createElement("input",{type:"text",id:"commandsRover2",placeholder:"LRM - Rover Commands",onKeyPress:E,value:S,onChange:function(e){_(),L(e.target.value)}})),n.a.createElement("hr",null),n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement("button",{className:"btn-start",type:"submit"},"Start Rovers"),n.a.createElement("button",{className:"btn-demo",type:"button",onClick:function(){r("10"),M("10"),x("1 2 N"),w("3 3 E"),X("LMLMLMLMM"),L("MRRMMRMRRM")}},"Demo Values"),n.a.createElement("button",{className:"btn-clear",type:"button",onClick:function(){r(""),M(""),x(""),w(""),X(""),L(""),F(""),V("")}},"Clear Fields")),n.a.createElement("br",null),n.a.createElement("hr",null),n.a.createElement("br",null),n.a.createElement("label",null,"Output Rover 1:"),n.a.createElement("input",{type:"text",id:"outputRover1",placeholder:"",value:D,onChange:function(e){return F(e.target.value)},disabled:!0}),n.a.createElement("label",null,"Output Rover 2:"),n.a.createElement("input",{type:"text",id:"outputRover2",placeholder:"",value:H,onChange:function(e){return V(e.target.value)},disabled:!0}))))};a(16);o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(M,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.f5189002.chunk.js.map
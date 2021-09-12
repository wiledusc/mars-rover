export default class Validator {

    errorMessages = [];
    field = {};

    constructor(fields) {
        this.field = fields;
     }

    validateForm() {
        if (isNaN(parseInt(this.field.plateauMaxX)) || parseInt(this.field.plateauMaxX) === 0) this.errorMessages.push("Plateau Max X is mandatory");
        if (isNaN(parseInt(this.field.plateauMaxY)) || parseInt(this.field.plateauMaxY) === 0) this.errorMessages.push("Plateau Max Y is mandatory");
        if (this.field.initialPositionRover1 === "") this.errorMessages.push("Rover 1 initial position is mandatory");
        if (this.field.initialPositionRover2 === "") this.errorMessages.push("Rover 2 initial position is mandatory");
        if (this.field.commandsRover1 === "") this.errorMessages.push("Commands Rover 1 is mandatory");
        if (this.field.commandsRover2 === "") this.errorMessages.push("Commands Rover 2 is mandatory");

        return this.errorMessages.length === 0 ? true : false;
    }

    getErrorMessage() {
        return this.errorMessages;
    }

}



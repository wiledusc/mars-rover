export default class Rover {

    positionX;
    positionY;
    plateauMaxX;
    plateauMaxY;
    direction;

    constructor(plateau) {

        if (!parseInt(plateau.maxX)) throw new Error("Plateau Max X is invalid");
        if (!parseInt(plateau.maxY)) throw new Error("Plateau Max Y is invalid");

        this.positionX = 0;
        this.positionY = 0;
        this.direction = 'N';
        this.plateauMaxX = plateau.maxX;
        this.plateauMaxY = plateau.maxY;

    }

    startRover(position) {
        const initialPosition = position.trim().split(' ');
        if(this.validateInitialPosition(initialPosition)) {
            this.positionX = parseInt(initialPosition[0].trim());
            this.positionY = parseInt(initialPosition[1].trim());
            this.direction = initialPosition[2].trim();
        } else {
            throw new Error("Rover initial position is invalid");
        }
    }

    validateInitialPosition(initialParams) {

        const validOrientation = ['N','S','E','W'];

        if (initialParams.length !== 3) return false;
        if(isNaN(parseInt(initialParams[0])) || parseInt(initialParams[0]) < 0) return false;
        if(isNaN(parseInt(initialParams[1])) || parseInt(initialParams[1]) < 0) return false;
        if(validOrientation.indexOf(initialParams[2]) === -1) return false;

        return true;
    }

    sendCommands(commands) {
        [...commands].forEach(command => {
            switch (command) {
                case 'L':
                    this.rotateLeft();
                    break;
                case 'R':
                    this.rotateRight();
                    break;
                case 'M':
                    this.moveForward();
                    break;
                default:
                    throw new Error(`Invalid Command: ${command}`);
            }
        });
    }

    getCurrentPosition() {
        return `${this.positionX},${this.positionY},${this.direction}`;
    }

    showErrorMessage() {
        //console.log(`Can't move there, position out of the plateau`);
    }

    moveForward() {
        if (this.direction === 'N' && this.positionY < this.plateauMaxY) {
            this.positionY++;
        } else if (this.direction === 'S' && this.positionY > 0) {
            this.positionY--;
        } else if (this.direction === 'E' && this.positionX < this.plateauMaxX) {
            this.positionX++;
        } else if (this.direction === 'W' && this.positionX > 0) {
            this.positionX--;
        } else {
            this.showErrorMessage();
        }
    }

    rotateLeft() {
        if (this.direction === 'N') this.direction = 'W';
        else if (this.direction === 'S') this.direction = 'E';
        else if (this.direction === 'E') this.direction = 'N';
        else if (this.direction === 'W') this.direction = 'S';
    }

    rotateRight() {
        if (this.direction === 'N') this.direction = 'E';
        else if (this.direction === 'S') this.direction = 'W';
        else if (this.direction === 'E') this.direction = 'S';
        else if (this.direction === 'W') this.direction = 'N';
    }

}
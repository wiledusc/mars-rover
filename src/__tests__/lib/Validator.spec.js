import Validator from '../../lib/Validator';

describe("Validator Class Tests", () => {

    it('Should return true if the plateau fields are correct', () => {
        const fields = {
            plateauMaxX: '10',
            plateauMaxY: '10',
        };

        const validator = new Validator(fields);

        expect(validator.validatePlateau()).toStrictEqual(true);
    });

    it('Should return true if the plateau fields are correct', () => {
        const fields = {
            plateauMaxX: '10',
            plateauMaxY: '10',
        };

        const validator = new Validator(fields);

        expect(validator.validatePlateau()).toStrictEqual(true);
    });

    it('Should return true if the Rover 1 fields are correct', () => {
        const fields = {
            initialPositionRover1: '0 0 N',
            commandsRover1: 'MRL',
        };

        const validator = new Validator(fields);

        expect(validator.validateRover1()).toStrictEqual(true);
    });

    it('Should return true if the Rover 1 fields are correct', () => {
        const fields = {
            initialPositionRover2: '0 0 N',
            commandsRover2: 'MRL',
        };

        const validator = new Validator(fields);

        expect(validator.validateRover2()).toStrictEqual(true);
    });



    it('Should return all error messages if all fields are blanks', () => {

        const allErrorMessagesArray = ["Plateau Max X is mandatory", "Plateau Max Y is mandatory", "Rover 1 initial position is mandatory", "Commands Rover 1 is mandatory", "Rover 2 initial position is mandatory", "Commands Rover 2 is mandatory"];

        const fields = {
            plateauMaxX: '',
            plateauMaxY: '',
            initialPositionRover1: '',
            initialPositionRover2: '',
            commandsRover1: '',
            commandsRover2: ''
        };

        const validator = new Validator(fields);
        validator.validatePlateau();
        validator.validateRover1()
        validator.validateRover2()

        expect(validator.getErrorMessage()).toStrictEqual(allErrorMessagesArray);
    });
});
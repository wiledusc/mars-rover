import Validator from '../../lib/Validator';

describe("Validator Class Test", () => {

    it('Should return true if the fields are correct', () => {
        const fields = {
            plateauMaxX: '10',
            plateauMaxY: '10',
            initialPositionRover1: '0,0,N',
            initialPositionRover2: '0,0,N',
            commandsRover1: 'M',
            commandsRover2: 'M'
        };

        const validator = new Validator(fields);

        expect(validator.validateForm()).toStrictEqual(true);
    });

    it('Should return false if the fields are blank', () => {
        const fields = {
            plateauMaxX: '',
            plateauMaxY: '',
            initialPositionRover1: '',
            initialPositionRover2: '',
            commandsRover1: '',
            commandsRover2: ''
        };

        const validator = new Validator(fields);

        expect(validator.validateForm()).toStrictEqual(false);
    });

    it('Should return all error messages if all fields are blank', () => {

        const allErrorMessagesArray = ["Plateau Max X is mandatory", "Plateau Max Y is mandatory", "Rover 1 initial position is mandatory", "Rover 2 initial position is mandatory", "Commands Rover 1 is mandatory", "Commands Rover 2 is mandatory"];
        
        const fields = {
            plateauMaxX: '',
            plateauMaxY: '',
            initialPositionRover1: '',
            initialPositionRover2: '',
            commandsRover1: '',
            commandsRover2: ''
        };

        const validator = new Validator(fields);
        validator.validateForm();

        expect(validator.getErrorMessage()).toStrictEqual(allErrorMessagesArray);
    });
});
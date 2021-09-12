import Rover from '../../model/Rover';

describe("Rover Class Test", () => {

    it('Move Rover forward', () => {
        const plateau = { maxX: 10, maxY: 10 };
        const rover1 = new Rover(plateau);

        rover1.startRover('0 0 N');
        rover1.sendCommands('M');

        const currentPosition = rover1.getCurrentPosition();
        expect(currentPosition).toStrictEqual('0 1 N');
    });

    it('Rotate Rover left', () => {
        const plateau = { maxX: 10, maxY: 10 };
        const rover1 = new Rover(plateau);

        rover1.startRover('0 0 N');
        rover1.sendCommands('L');

        const currentPosition = rover1.getCurrentPosition();
        expect(currentPosition).toStrictEqual('0 0 W');
    });

    it('Rotate Rover right', () => {
        const plateau = { maxX: 10, maxY: 10 };
        const rover1 = new Rover(plateau);

        rover1.startRover('0 0 N');
        rover1.sendCommands('R');

        const currentPosition = rover1.getCurrentPosition();
        expect(currentPosition).toStrictEqual('0 0 E');
    });

    it('Rover cannot go out of the Plateau limit in Y axis', () => {
        const plateau = { maxX: 5, maxY: 5 };
        const rover1 = new Rover(plateau);

        rover1.startRover('0 0 N');
        rover1.sendCommands('MMMMMMMMMMMMMMM');

        const currentPosition = rover1.getCurrentPosition();
        expect(currentPosition).toStrictEqual('0 5 N');
    });

    it('Rover cannot go out of the Plateau limit in X axis', () => {
        const plateau = { maxX: 5, maxY: 5 };
        const rover1 = new Rover(plateau);

        rover1.startRover('0 0 E');
        rover1.sendCommands('MMMMMMMMMMMMMMM');

        const currentPosition = rover1.getCurrentPosition();
        expect(currentPosition).toStrictEqual('5 0 E');
    });

    it('Demo test case', () => {
        const plateau = { maxX: 10, maxY: 10 }
        const rover1 = new Rover(plateau);
        const rover2 = new Rover(plateau);

        rover1.startRover('1 2 N');
        rover1.sendCommands('LMLMLMLMM');

        rover2.startRover('3 3 E');
        rover2.sendCommands('MRRMMRMRRM');

        const currentPositionRover1 = rover1.getCurrentPosition();
        const currentPositionRover2 = rover2.getCurrentPosition();

        expect(currentPositionRover1).toStrictEqual('1 3 N');
        expect(currentPositionRover2).toStrictEqual('2 3 S');
    });

    it('Rover constructor without Max X parameter', () => {
        const plateau = { maxX: '', maxY: 10 }
        expect(() => {
            new Rover(plateau)
        }).toThrow(new Error("Plateau Max X is invalid"));
    });

    it('Rover constructor without Max Y parameter', () => {
        const plateau = { maxX: 10, maxY: '' }

        expect(() => {
            new Rover(plateau)
        }).toThrow(new Error("Plateau Max Y is invalid"));
    });

    it('First parameter of Rover initial position is invalid', () => {
        const plateau = { maxX: 10, maxY: 10 }
        const rover1 = new Rover(plateau);

        expect(() => {
            rover1.startRover('-1 0 N')
        }).toThrow(new Error("Rover initial position is invalid"));
    });

    it('Second parameter of Rover initial position is invalid', () => {
        const plateau = { maxX: 10, maxY: 10 }
        const rover1 = new Rover(plateau);

        expect(() => {
            rover1.startRover('0 -1 N')
        }).toThrow(new Error("Rover initial position is invalid"));
    });

    it('Third parameter of Rover initial position is invalid', () => {
        const plateau = { maxX: 10, maxY: 10 }
        const rover1 = new Rover(plateau);

        expect(() => {
            rover1.startRover('0 0 A')
        }).toThrow(new Error("Rover initial position is invalid"));
    });

    it('Rover received a wrong parameter in initial position', () => {
        const plateau = { maxX: 10, maxY: 10 }

        const rover1 = new Rover(plateau);

        expect(() => {
            rover1.startRover('0 0 N A')
        }).toThrow(new Error("Rover initial position is invalid"));
    });

    it('Rover received an invalid command', () => {
        const plateau = { maxX: 10, maxY: 10 }

        const rover1 = new Rover(plateau);
        rover1.startRover('0 0 N');

        expect(() => {
            rover1.sendCommands('A')
        }).toThrow(new Error("Invalid Command: A"));
    });

});
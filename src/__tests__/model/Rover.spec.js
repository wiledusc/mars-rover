import Rover from '../../model/Rover';

describe("Rover Class Test", () => {

    it('Move Rover forward', () => {
        const plateau = { maxX: 10, maxY: 10 }
        const rover1 = new Rover(plateau);
        rover1.startRover('0 0 N');

        rover1.sendCommands('M');

        const currentPosition = rover1.getCurrentPosition();
        expect(currentPosition).toStrictEqual('0,1,N');
    });
    
    it('Rotate Rover left', () => {
        const plateau = { maxX: 10, maxY: 10 }
        const rover1 = new Rover(plateau);
        rover1.startRover('0 0 N');

        rover1.sendCommands('L');

        const currentPosition = rover1.getCurrentPosition();
        expect(currentPosition).toStrictEqual('0 0 W');
    });

    it('Rotate Rover right', () => {
        const plateau = { maxX: 10, maxY: 10 }
        const rover1 = new Rover(plateau);
        rover1.startRover('0 0 N');

        rover1.sendCommands('R');

        const currentPosition = rover1.getCurrentPosition();
        expect(currentPosition).toStrictEqual('0 0 E');
    });

    it('Rover cannot go out of the Plateau limit in Y axis', () => {
        const plateau = { maxX: 5, maxY: 5 }
        const rover1 = new Rover(plateau);
        rover1.startRover('0 0 N');

        rover1.sendCommands('MMMMMMMMMMMMMMM');

        const currentPosition = rover1.getCurrentPosition();
        expect(currentPosition).toStrictEqual('0 5 N');
    });

    it('Rover cannot go out of the Plateau limit in X axis', () => {
        const plateau = { maxX: 5, maxY: 5 }
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

});
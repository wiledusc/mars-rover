import Plateau from '../../model/Plateau';

describe("Plateau Class Test", () => {

    it('Call the class constructor with the correct input parameter', () => {
        const plateau = new Plateau(10, 10);

        expect(plateau.maxX).toBe(10);
        expect(plateau.maxY).toBe(10);
    });

    it('Call the class constructor without input parameter', () => {
        expect(() => {
            new Plateau()
        }).toThrow(new Error("Plateau Max X is invalid"));
    });

});
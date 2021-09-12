import Plateau from '../../model/Plateau';

describe("Plateau Class Test", () => {

    it('Call the class constructor with the correct input parameters', () => {
        const plateau = new Plateau(10, 10);

        expect(plateau.maxX).toBe(10);
        expect(plateau.maxY).toBe(10);
    });

    it('Call the class constructor without input parameters', () => {

        expect(() => {
            new Plateau()
        }).toThrow(new Error("Plateau Max X is invalid"));

    });

    it('Call the class constructor without Max Y parameter', () => {

        expect(() => {
            new Plateau(10)
        }).toThrow(new Error("Plateau Max Y is invalid"));
        
    });

});
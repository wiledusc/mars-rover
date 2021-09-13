import * as formHelper from '../../helpers/form-helpers';


describe("Form Helper Tests", () => {

    it('Should not execute preventDefault when the correct input parameters are informed ', () => {
        const event = { key: '10 10 E', preventDefault: () => { return true }};

        expect(formHelper.checkInitialPositionInputs(event)).toBe(undefined);
    });

    it('Should execute preventDefault when the wrong input parameters are informed ', () => {
        const event = { key: 'A', preventDefault: () => { return true }};

        expect(formHelper.checkInitialPositionInputs(event)).toBe(true);
    });

    it('Should not execute preventDefault when the correct input parameters are informed', () => {
        const event = { key: '10 10', preventDefault: () => { return true } };

        expect(formHelper.checkPlateauInputs(event)).toBe(undefined);
    });

    it('Should execute preventDefault when the wrong input parameters are informed', () => {
        const event = { key: 'A A', preventDefault: () => { return true } };

        expect(formHelper.checkPlateauInputs(event)).toBe(true);
    });

    it('Should not execute preventDefault when the correct input parameters are informed', () => {
        const event = { key: 'LRM', preventDefault: () => { return true } };

        expect(formHelper.checkCommandsInputs(event)).toBe(undefined);
    });

    it('Should execute preventDefault when the wrong input parameters are informed', () => {
        const event = { key: 'A', preventDefault: () => { return true } };

        expect(formHelper.checkCommandsInputs(event)).toBe(true);
    });

    it('Should call showErrorMessage without throw error message', () => {
        const message = "Test message";

        expect(() => { formHelper.showErrorMessage(message) }).not.toThrow();
    });

});
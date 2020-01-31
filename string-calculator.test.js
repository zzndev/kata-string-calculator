const stringCalculator = require('./string-calculator');

describe("String Calculator", () => {
    it("should sum one number correctly.", () => {
        expect(stringCalculator('1')).toBe(1);
        expect(stringCalculator('2')).toBe(2);
        expect(stringCalculator('3')).toBe(3);
    });
    
    it("should sum two numbers correctly.", () => {
        expect(stringCalculator('1, 2')).toBe(3);
        expect(stringCalculator('2, 1')).toBe(3);
        expect(stringCalculator('2, 3')).toBe(5);
    });
    
    it("should sum three numbers correctly.", () => {
        expect(stringCalculator('1, 2, 3')).toBe(6);
        expect(stringCalculator('2, 1, 3')).toBe(6);
        expect(stringCalculator('2, 3, 5')).toBe(10);
    });

});
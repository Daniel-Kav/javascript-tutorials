// randomGenerator.test.js
const generateRandomNumber = require('../src/randomGenerator');

describe('generateRandomNumber', () => {
    it('should return a random number between 1 and 100', () => {
        // Mock Math.random()
        jest.spyOn(Math, 'random').mockReturnValue(0.5);

        const randomNumber = generateRandomNumber();
        
        // Since we mocked Math.random to return 0.5, the generated number should be 51
        expect(randomNumber).toBe(51);

        // Restore the original implementation of Math.random()
        Math.random.mockRestore();
    });
});

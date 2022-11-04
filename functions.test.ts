const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {

    test('shuffleArray should return an array', () => {
        expect(shuffleArray([1,2,3])).toBe([])
    },

    test('shuffleArray to return an array of the same length', () => {
        expect(shuffleArray([1, 2, 3]).toHaveLength(3)

    }

}
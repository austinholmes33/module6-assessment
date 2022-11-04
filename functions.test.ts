const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {

    test('shuffleArray should return an array', () => {
        expect(shuffleArray).toBe([])
    },

    test('shuffleArray to return an array of the same length', () => {
        const array = [1,2,3]
        expect(shuffleArray(array.length).toHaveLength(array.length)
    })

}
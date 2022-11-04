const {shuffleArray} = require('./utils')

const testArr1 = [1,2,3,4]


describe('shuffleArray should', () => {

    test('shuffleArray should return an array', () => {
        expect(Array.isArray(shuffleArray(testArr1))).toBe(true)
    })

    test('shuffleArray should return an array of the same length as input', () => {
        expect(shuffleArray(testArr1)).toHaveLength(testArr1.length)

    })

})
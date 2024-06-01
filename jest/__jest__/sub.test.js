const options = require('../src/index')

test('should return the difference', ()=> {
    const diff = new options
    expect(diff.sub(4,2)).toEqual(2)
})
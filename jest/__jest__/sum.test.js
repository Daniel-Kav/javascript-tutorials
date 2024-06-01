const calculator = require('../src/index.js');
 const calculato = new calculator();
test('adds 1 + 2 to equal 3', () => {
  expect(calculato.add(1, 2)).toBe(3);
});

test('add 2 + 4 to not be 10',()=>{
  expect(calculto.add(2, 4)).not.toBe(10);
})
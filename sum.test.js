
const Calculadora = require('./agiles');

test('adds 2 + 0 to equal 2', () => {
    let p;
    p = new Calculadora(2, 0);

    expect(p.sum(p.num1,p.num2)).toBe(2);
});



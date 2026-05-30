const { maiorNumero } = require('./script');

test('retorna o maior número', () => {
    expect(maiorNumero(10, 5)).toBe(10);
});
const {
    maiorNumero,
    parOuImpar,
    podeVotar,
    positivoNegativo,
    calcularBonus,
    podeDirigir,
    semestre,
    vogalOuConsoante,
    media,
    login
} = require('./script');

// Exercício 1
test('retorna o maior número', () => {
    expect(maiorNumero(10, 5)).toBe(10);
});

// Exercício 2
test('retorna par', () => {
    expect(parOuImpar(8)).toBe('Par');
});

// Exercício 3
test('pode votar', () => {
    expect(podeVotar(20)).toBe('Pode votar');
});

// Exercício 4
test('retorna negativo', () => {
    expect(positivoNegativo(-5)).toBe('Negativo');
});

// Exercício 5
test('calcula bônus', () => {
    expect(calcularBonus(1000)).toBe(200);
});

// Exercício 6
test('pode dirigir', () => {
    expect(podeDirigir(18)).toBe('Pode dirigir');
});

// Exercício 7
test('primeiro semestre', () => {
    expect(semestre('Março')).toBe('Primeiro semestre');
});

// Exercício 8
test('é vogal', () => {
    expect(vogalOuConsoante('A')).toBe('Vogal');
});

// Exercício 9
test('calcula média', () => {
    expect(media([10, 8, 6, 4, 2])).toBe(6);
});

// Exercício 10
test('login correto', () => {
    expect(login('Admin', '123'))
        .toBe('Conectado com sucesso!');
});
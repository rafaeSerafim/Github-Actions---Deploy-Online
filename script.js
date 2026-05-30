// Exercício 1
function maiorNumero(a, b) {
    return a > b ? a : b;
}

// Exercício 2
function parOuImpar(numero) {
    return numero % 2 === 0 ? "Par" : "Ímpar";
}

// Exercício 3
function podeVotar(idade) {
    if (idade < 16) {
        return "Não pode votar";
    }

    if (idade < 18 || idade >= 70) {
        return "Voto opcional";
    }

    return "Pode votar";
}

// Exercício 4
function positivoNegativo(valor) {
    if (valor > 0) {
        return "Positivo";
    }

    if (valor < 0) {
        return "Negativo";
    }

    return "Zero";
}

// Exercício 5
function calcularBonus(salario) {
    if (salario < 2000) {
        return salario * 0.20;
    }

    if (salario <= 5000) {
        return salario * 0.10;
    }

    return salario * 0.05;
}

// Exercício 6
function podeDirigir(idade) {
    return idade >= 18
        ? "Pode dirigir"
        : "Não pode dirigir";
}

// Exercício 7
function semestre(mes) {
    const primeiroSemestre = [
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho"
    ];

    return primeiroSemestre.includes(mes.toLowerCase())
        ? "Primeiro semestre"
        : "Segundo semestre";
}

// Exercício 8
function vogalOuConsoante(letra) {
    const vogais = ["a", "e", "i", "o", "u"];

    return vogais.includes(letra.toLowerCase())
        ? "Vogal"
        : "Consoante";
}

// Exercício 9
function media(valores) {
    let soma = 0;

    for (let valor of valores) {
        soma += valor;
    }

    return soma / valores.length;
}

// Exercício 10
function login(usuario, senha) {
    if (usuario === "Admin" && senha === "123") {
        return "Conectado com sucesso!";
    }

    return "Acesso negado! Usuário ou senha incorretos!";
}

module.exports = {
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
};
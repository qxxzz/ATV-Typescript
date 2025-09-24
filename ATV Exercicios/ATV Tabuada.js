/**
 * Exibe a tabuada de 1 a 10 de um número dado.
 */
var base = 7; // número para gerar a tabuada (alterar para testar)

// Loop de 1 a 10 para calcular a tabuada
for (var i = 1; i <= 10; i++) {
    console.log("".concat(base, " x ").concat(i, " = ").concat(base * i)); // mostra o resultado da multiplicação
}

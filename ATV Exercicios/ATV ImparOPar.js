/**
 * Verifica se um número é par ou ímpar e exibe o resultado.
 */
var numero = 28; // número a ser verificado (alterar para testar)

// Verifica se o número é divisível por 2
if (numero % 2 === 0) {
    console.log("".concat(numero, " \u00E9 PAR.")); // número par
} else {
    console.log("".concat(numero, " \u00E9 \u00CDMPAR.")); // número ímpar
}

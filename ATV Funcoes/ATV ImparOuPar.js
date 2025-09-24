/**
 * Verificação de Paridade Numérica
 * Esta função determina se um dado número inteiro é par ou ímpar.
 * Retorna uma string indicando o status ("Par" ou "Ímpar").
 */
function parOuImpar(n) {
    // Utiliza o operador de módulo para verificar se há resto na divisão por 2.
    if (n % 2 === 0) {
        // Se o resto for 0, o número é par.
        return "Par";
    }
    else {
        // Caso contrário, o número é ímpar.
        return "Ímpar";
    }
}
// Demonstra a aplicação da função 'parOuImpar' com um exemplo e exibe o resultado.
console.log("7 \u00E9 ".concat(parOuImpar(7)));
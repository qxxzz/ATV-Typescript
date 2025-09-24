/**
 * Calculadora de Média Aritmética Simples
 * Desenvolvida para calcular a média de três valores numéricos.
 * A função soma as três entradas e as divide por três para obter a média.
 */
function media(n1, n2, n3) {
    // Soma os três números fornecidos e divide o total por 3 para encontrar a média.
    return (n1 + n2 + n3) / 3;
}
// Invoca a função 'media' com três notas e exibe o resultado formatado com duas casas decimais.
console.log("M\u00E9dia = ".concat(media(7, 8, 6).toFixed(2)));
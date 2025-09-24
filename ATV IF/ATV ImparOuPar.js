/**
 * Determinação de Paridade Numérica
 * Identifica se um número é divisível por dois sem resto
 */
var valor = 12;

// Verificação do resto da divisão por 2
if (valor % 2 === 0) {
    // Número divisível por 2
    console.log("".concat(valor, " \u00E9 par."));
}
else {
    // Número com resto na divisão por 2
    console.log("".concat(valor, " \u00E9 \u00EDmpar."));
}
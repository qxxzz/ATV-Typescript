/**
 * Comparação de Valores
 * Identifica qual dos dois valores numéricos possui maior magnitude
 */
var a = 25;
var b = 42;

// Análise comparativa entre os valores
if (a > b) {
    // Primeiro valor é superior
    console.log("".concat(a, " \u00E9 maior que ").concat(b, "."));
}
else if (b > a) {
    // Segundo valor é superior
    console.log("".concat(b, " \u00E9 maior que ").concat(a, "."));
}
else {
    // Valores idênticos detectados
    console.log("Os números são iguais.");
}
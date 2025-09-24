/**
 * Converte de Celsius para Fahrenheit usando a fórmula:
 * F = C × 1.8 + 32
 */
function celsiusParaFahrenheit(celsius) {
    return celsius * 1.8 + 32; // aplica a fórmula de conversão
}

// Valor de entrada
var c = 25; // temperatura em Celsius

// Converte para Fahrenheit
var f = celsiusParaFahrenheit(c);

// Exibe o resultado formatado no console
console.log("".concat(c, "\u00B0C equivalem a ").concat(f.toFixed(1), "\u00B0F"));

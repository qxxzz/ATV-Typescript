/**
 * Função de Conversão de Escalas Termométricas
 * Transforma valores da escala Celsius para a escala Fahrenheit
 */
function celsiusParaFahrenheit(c) {
    // Aplica a fórmula de conversão entre as escalas térmicas
    return c * 1.8 + 32;
}
// Exemplo de conversão de temperatura
console.log("25\u00B0C = ".concat(celsiusParaFahrenheit(25), "\u00B0F"));
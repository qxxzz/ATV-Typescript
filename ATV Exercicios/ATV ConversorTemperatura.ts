/**
 * Converte de Celsius para Fahrenheit usando a fórmula:
 * F = C × 1.8 + 32
 */
function celsiusParaFahrenheit(celsius: number): number {
  return celsius * 1.8 + 32; // aplica a conversão
}

// Valor de entrada em Celsius
let c = 25;

// Converte para Fahrenheit
let f = celsiusParaFahrenheit(c);

// Exibe o resultado no console
console.log(`${c}°C equivalem a ${f.toFixed(1)}°F`);

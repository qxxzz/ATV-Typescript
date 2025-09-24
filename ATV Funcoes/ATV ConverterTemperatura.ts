/**
 * Função de Transformação de Temperatura
 * Converte valores da escala Celsius para Fahrenheit usando fórmula padrão
 */

function celsiusParaFahrenheit(c: number): number {
  // Executa a conversão mediante equação estabelecida
  return c * 1.8 + 32;
}

// Apresentação do resultado da conversão
console.log(`25°C = ${celsiusParaFahrenheit(25)}°F`);
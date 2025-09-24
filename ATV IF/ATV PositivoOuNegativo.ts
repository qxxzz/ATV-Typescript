/**
 * Análise de Sinal Numérico
 * Determina se um valor está no espectro positivo ou negativo
 */

let numero: number = -5;

// Avaliação do sinal do valor
if (numero >= 0) {
  // Valor não negativo identificado
  console.log(`${numero} é positivo.`);
} else {
  // Valor negativo identificado
  console.log(`${numero} é negativo.`);
}
/**
 * Análise de Divisibilidade
 * Verifica se um número inteiro possui divisão exata por dois
 */

let valor: number = 12;

// Teste de divisibilidade por 2
if (valor % 2 === 0) {
  // O número é múltiplo de 2
  console.log(`${valor} é par.`);
} else {
  // O número não é múltiplo de 2
  console.log(`${valor} é ímpar.`);
}
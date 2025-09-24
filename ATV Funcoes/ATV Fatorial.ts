/**
 * Função de Cálculo de Fatorial
 * Realiza a multiplicação sequencial de todos os números inteiros desde n até 1
 */

function fatorial(n: number): number {
  // Inicializa a variável que armazenará o produto total
  let resultado = 1;
  // Itera de n até 2, multiplicando cada número ao resultado
  for (let i = n; i > 1; i--) {
    resultado *= i;
  }
  // Retorna o valor fatorial calculado
  return resultado;
}

// Exibe o resultado do fatorial para o número 5
console.log(`Fatorial de 5 = ${fatorial(5)}`);
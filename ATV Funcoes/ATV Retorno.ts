/**
 * Operação de Soma Simples
 * Esta função aceita dois argumentos numéricos e calcula a sua soma.
 * O resultado é então retornado para o chamador.
 */
function somar(a: number, b: number): number {
  // Realiza a adição dos dois parâmetros de entrada.
  return a + b;
}

// Invoca a função 'somar' com valores de exemplo e exibe o resultado no console.
console.log(`Resultado: ${somar(10, 5)}`);
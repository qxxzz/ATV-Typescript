/**
 * Cálculo de Diferença entre Dois Números
 * Esta função é projetada para aceitar dois valores numéricos.
 * Ela computa a diferença subtraindo o segundo número do primeiro.
 */
function subtrair(a: number, b: number): number {
  // Realiza a operação de subtração: 'a' menos 'b'.
  return a - b;
}

// Demonstra o uso da função 'subtrair' e imprime o resultado da operação.
console.log(`Resultado: ${subtrair(20, 8)}`);
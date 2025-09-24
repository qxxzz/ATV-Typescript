/**
 * Cálculo da Média de Três Valores
 * Uma função destinada a receber três números (representando notas).
 * Ela calcula a média aritmética desses números e retorna o resultado.
 */
function media(n1: number, n2: number, n3: number): number {
  // Soma os três números fornecidos e divide a soma por 3 para obter a média.
  return (n1 + n2 + n3) / 3;
}

// Demonstra a aplicação da função 'media' e exibe o resultado formatado.
console.log(`Média = ${media(7, 8, 6).toFixed(2)}`);
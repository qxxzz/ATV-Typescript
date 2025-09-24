/**
 * Função para Divisão com Prevenção de Erros
 * Aceita dois números como entrada para realizar uma operação de divisão.
 * Contém uma salvaguarda para lidar com tentativas de dividir por zero.
 */
function dividir(a: number, b: number): number {
  // Confere se o divisor é igual a zero, uma condição inválida para a divisão.
  if (b === 0) {
    // Emite uma mensagem de erro no console informando a falha.
    console.log("Erro: divisão por zero");
    // Retorna 'NaN' (Not a Number) para representar o resultado indefinido.
    return NaN;
  }
  // Procede com a divisão normal se o divisor não for zero.
  return a / b;
}

// Demonstra a utilização da função 'dividir' e exibe o quociente obtido.
console.log(`Resultado: ${dividir(20, 4)}`);
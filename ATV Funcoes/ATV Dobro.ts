/**
 * Cálculo do Dobro de um Valor
 * Uma função que aceita um argumento numérico.
 * Seu objetivo é retornar o valor que representa o dobro do número fornecido.
 */
function dobro(n: number): number {
  // O número de entrada é multiplicado por dois, e o resultado é retornado.
  return n * 2;
}

// Exibe o resultado de chamar a função 'dobro' com um número predefinido.
console.log(`Dobro de 12 = ${dobro(12)}`);
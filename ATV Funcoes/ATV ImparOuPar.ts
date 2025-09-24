/**
 * Classificador de Paridade Numérica
 * Recebe um número inteiro como entrada.
 * Analisa se o número é divisível por dois (par) ou não (ímpar).
 * Retorna uma string que descreve a paridade do número.
 */
function parOuImpar(n: number): string {
  // Verifica se o número tem um resto zero quando dividido por 2.
  if (n % 2 === 0) {
    // Se não houver resto, o número é considerado par.
    return "Par";
  } else {
    // Se houver um resto, o número é ímpar.
    return "Ímpar";
  }
}

// Exibe o resultado da avaliação da paridade do número 7.
console.log(`7 é ${parOuImpar(7)}`);
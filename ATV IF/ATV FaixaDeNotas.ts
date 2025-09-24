/**
 * Classificação por Desempenho
 * Define a categoria de avaliação conforme a pontuação obtida
 */

let notaAluno: number = 82;

// Análise da pontuação para atribuição do conceito
if (notaAluno >= 90) {
  // Nível de excelência
  console.log("Conceito A");
} else if (notaAluno >= 80) {
  // Nível muito bom
  console.log("Conceito B");
} else if (notaAluno >= 70) {
  // Nível satisfatório
  console.log("Conceito C");
} else if (notaAluno >= 60) {
  // Nível mínimo aceitável
  console.log("Conceito D");
} else {
  // Resultado insatisfatório
  console.log("Conceito F");
}
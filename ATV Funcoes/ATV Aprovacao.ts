/**
 * Função de Verificação de Status Escolar
 * Analisa se o aluno atinge os requisitos de nota e frequência para aprovação
 */

function verificarAprovacao(nota: number, faltas: number): string {
  // Confere se o aluno alcançou a média e não excedeu o limite de faltas
  if (nota >= 7 && faltas <= 10) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}

// Avaliação de casos de teste
console.log(verificarAprovacao(8, 5));
console.log(verificarAprovacao(6, 12));
/**
 * Definição de Grupo Etário
 * Enquadra a pessoa em uma categoria demográfica conforme sua idade
 */

let idadePessoa: number = 35;

// Análise da idade para enquadramento em faixa etária
if (idadePessoa < 12) {
  // Período da infância
  console.log("Criança");
} else if (idadePessoa < 18) {
  // Período da juventude
  console.log("Adolescente");
} else if (idadePessoa < 60) {
  // Idade produtiva
  console.log("Adulto");
} else {
  // Melhor idade
  console.log("Idoso");
}
/**
 * Calcula a média de 3 notas e indica se o aluno está aprovado (>=6) ou reprovado.
 */
let n1: number = 6; // nota 1
let n2: number = 2; // nota 2
let n3: number = 9; // nota 3

// Calcula a média das três notas
let media: number = (n1 + n2 + n3) / 3;

// Exibe a média no console com duas casas decimais
console.log(`Média: ${media.toFixed(2)}`);

// Verifica se o aluno foi aprovado ou reprovado
if (media >= 6) {
  console.log("Aprovado"); // aprovado
} else {
  console.log("Reprovado"); // reprovado
}

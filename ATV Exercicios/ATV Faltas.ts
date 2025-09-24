/**
 * Critério: aprovado se nota >= 7 E faltas <= 10; caso contrário, reprovado.
 */
let materia: string = "História"; // nome da matéria
let nota: number = 8;               // nota do aluno (alterar para testar)
let faltas: number = 9;            // quantidade de faltas (alterar para testar)

// Verifica se o aluno atende aos critérios de aprovação
if (nota >= 7 && faltas <= 10) {
  console.log(`Aprovado em ${materia} (nota: ${nota}, faltas: ${faltas})`); // aprovado
} else {
  console.log(`Reprovado em ${materia} (nota: ${nota}, faltas: ${faltas})`); // reprovado
}

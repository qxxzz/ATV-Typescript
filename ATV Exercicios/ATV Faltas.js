/**
 * Regra: aprovado se nota >= 7 E faltas <= 10. Caso contrário, reprovado.
 */
var materia = "História"; // nome da matéria
var nota = 8;               // nota do aluno (alterar para testar)
var faltas = 12;            // número de faltas (alterar para testar)

// Verifica se o aluno atende aos critérios de aprovação
if (nota >= 7 && faltas <= 10) {
    console.log("Aprovado em ".concat(materia, " (nota: ").concat(nota, ", faltas: ").concat(faltas, ")")); // aprovado
} else {
    console.log("Reprovado em ".concat(materia, " (nota: ").concat(nota, ", faltas: ").concat(faltas, ")")); // reprovado
}

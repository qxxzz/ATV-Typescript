/**
 * Avaliação de Desempenho Acadêmico
 * Verifica aprovação considerando rendimento e frequência escolar
 */
var materia = "Historia";
var notaFinal = 8;
var faltas = 12;

// Verificação dos critérios de aprovação simultâneos
if (notaFinal >= 7 && faltas <= 10) {
    // Atende a ambos os requisitos: nota mínima e limite de faltas
    console.log("Aprovado em ".concat(materia, "."));
}
else {
    // Não atende a um ou ambos os critérios necessários
    console.log("Reprovado em ".concat(materia, "."));
}
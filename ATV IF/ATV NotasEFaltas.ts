/**
 * Avaliação de Desempenho Acadêmico
 * Verifica aprovação considerando rendimento e frequência escolar
 */
let materia: string = "Historia";
let notaFinal: number = 8;
let faltas: number = 12;

// Verificação dos critérios de aprovação simultâneos
if (notaFinal >= 7 && faltas <= 10) {
    // Atende a ambos os requisitos: nota mínima e limite de faltas
    console.log(`Aprovado em ${materia}.`);
}
else {
    // Não atende a um ou ambos os critérios necessários
    console.log(`Reprovado em ${materia}.`);
}
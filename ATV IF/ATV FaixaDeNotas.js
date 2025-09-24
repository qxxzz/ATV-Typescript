/**
 * Sistema de Classificação de Notas
 * Atribui conceitos baseados em intervalos de pontuação
 */
var notaAluno = 82;

// Avaliação da nota para determinação do conceito
if (notaAluno >= 90) {
    // Excelente desempenho
    console.log("Conceito A");
}
else if (notaAluno >= 80) {
    // Bom desempenho
    console.log("Conceito B");
}
else if (notaAluno >= 70) {
    // Desempenho regular
    console.log("Conceito C");
}
else if (notaAluno >= 60) {
    // Desempenho abaixo do esperado
    console.log("Conceito D");
}
else {
    // Desempenho insuficiente
    console.log("Conceito F");
}
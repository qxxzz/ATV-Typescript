/**
 * Função de Avaliação de Status Escolar
 * Determina o resultado final baseado no desempenho e frequência do aluno
 */
function verificarAprovacao(nota, faltas) {
    // Verifica se atende aos critérios mínimos de aprovação
    if (nota >= 7 && faltas <= 10) {
        return "Aprovado";
    }
    else {
        return "Reprovado";
    }
}
// Testando a função com diferentes cenários
console.log(verificarAprovacao(8, 5));
console.log(verificarAprovacao(6, 12));
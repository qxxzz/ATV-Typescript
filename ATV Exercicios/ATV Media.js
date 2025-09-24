/**
 * Calcula a média de 3 notas e indica se o aluno está aprovado (>=6) ou reprovado.
 */
var n1 = 7; // nota 1
var n2 = 6; // nota 2
var n3 = 3; // nota 3

// Calcula a média das três notas
var media = (n1 + n2 + n3) / 3;

// Exibe a média com duas casas decimais
console.log("M\u00E9dia: ".concat(media.toFixed(2)));

// Verifica aprovação ou reprovação
if (media >= 6) {
    console.log("Aprovado"); // aprovado
} else {
    console.log("Reprovado"); // reprovado
}

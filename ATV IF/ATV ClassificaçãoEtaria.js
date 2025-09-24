/**
 * Categorização por Faixa Etária
 * Classifica indivíduos em grupos de acordo com sua idade
 */
var idadePessoa = 35;

// Determinação do grupo etário baseado na idade
if (idadePessoa < 12) {
    // Primeira infância
    console.log("Criança");
}
else if (idadePessoa < 18) {
    // Período da adolescência
    console.log("Adolescente");
}
else if (idadePessoa < 60) {
    // Fase adulta
    console.log("Adulto");
}
else {
    // Terceira idade
    console.log("Idoso");
}
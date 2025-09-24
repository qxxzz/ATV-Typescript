/**
 * Validação de Triângulo
 * Verifica se três medidas podem constituir um triângulo de acordo com a desigualdade triangular
 */
var lado1 = 5;
var lado2 = 7;
var lado3 = 10;

// Aplicação da regra da desigualdade triangular
if (lado1 < lado2 + lado3 &&
    lado2 < lado1 + lado3 &&
    lado3 < lado1 + lado2) {
    // As medidas atendem aos critérios de formação triangular
    console.log("Forma um triângulo válido.");
}
else {
    // As medidas não satisfazem as condições necessárias
    console.log("Não forma um triângulo.");
}
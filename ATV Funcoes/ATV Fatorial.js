/**
 * Função de Cálculo Fatorial
 * Computa o produto de todos os inteiros positivos até o número especificado
 */
function fatorial(n) {
    // Inicializa o acumulador do produto
    var resultado = 1;
    // Multiplica sequencialmente os valores decrescentes
    for (var i = n; i > 1; i--) {
        resultado *= i;
    }
    // Retorna o resultado do cálculo fatorial
    return resultado;
}
// Demonstração do cálculo fatorial para o número 5
console.log("Fatorial de 5 = ".concat(fatorial(5)));
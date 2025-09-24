/**
 * Fórmula: VF = Capital + (Capital × Taxa × Tempo)
 * A taxa deve ser escrita em decimal (ex: 5% = 0.05).
 */
function jurosSimples(capital, taxa, tempo) {
    return capital + (capital * taxa * tempo);
}

// Declara valores para o cálculo
var capital = 1000;   // valor inicial aplicado
var taxa = 0.05;      // taxa de 5% ao mês
var tempo = 12;       // tempo em meses

// Chama a função para calcular o valor final
var vfSimples = jurosSimples(capital, taxa, tempo);

// Mostra o resultado formatado no console
console.log("Juros simples -> VF: R$ ".concat(vfSimples.toFixed(2)));

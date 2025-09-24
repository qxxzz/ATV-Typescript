/**
 * Fórmula: VF = Capital × (1 + Taxa) ^ Tempo
 * Observação: a taxa deve estar em formato decimal (ex: 5% → 0.05).
 */
function jurosCompostos(capital, taxa, tempo) {
    return capital * Math.pow(1 + taxa, tempo);
}

// Declara os valores de entrada
var capitalC = 1000;   // valor inicial aplicado
var taxaC = 0.05;      // taxa de 5% ao mês
var tempoC = 12;       // período de 12 meses

// Calcula o valor final com juros compostos
var vfCompostos = jurosCompostos(capitalC, taxaC, tempoC);

// Mostra o resultado formatado no console
console.log("Juros compostos -> VF: R$ ".concat(vfCompostos.toFixed(2)));

/**
 * Fórmula usada: VF = Capital × (1 + Taxa) ^ Tempo
 * A taxa deve ser informada em formato decimal (ex: 5% → 0.05).
 */
function jurosCompostos(capital: number, taxa: number, tempo: number): number {
  return capital * Math.pow(1 + taxa, tempo);
}

// Define os valores para o cálculo
let capitalC = 1000;   // valor inicial investido
let taxaC = 0.05;      // taxa de 5% ao mês
let tempoC = 12;       // período em meses

// Calcula o valor final com base nos juros compostos
let vfCompostos = jurosCompostos(capitalC, taxaC, tempoC);

// Exibe o resultado no console com duas casas decimais
console.log(`Juros compostos -> VF: R$ ${vfCompostos.toFixed(2)}`);

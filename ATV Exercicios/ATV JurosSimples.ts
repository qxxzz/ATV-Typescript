/**
 * Fórmula usada: VF = Capital + (Capital × Taxa × Tempo)
 * A taxa deve ser informada em decimal (ex: 5% → 0.05).
 */
function jurosSimples(capital: number, taxa: number, tempo: number): number {
  return capital + (capital * taxa * tempo);
}

// Define os valores do cálculo
let capital = 1000;   // valor aplicado
let taxa = 0.05;      // taxa de 5% ao mês
let tempo = 12;       // tempo em meses

// Executa a função e guarda o valor final
let vfSimples = jurosSimples(capital, taxa, tempo);

// Exibe o resultado formatado no console
console.log(`Juros simples -> VF: R$ ${vfSimples.toFixed(2)}`);

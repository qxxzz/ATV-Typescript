/**
 * Determinação do Maior Valor
 * Compara dois valores numéricos para encontrar o de maior magnitude
 */

let a: number = 25;
let b: number = 42;

// Processo de comparação entre os dois valores
if (a > b) {
  // O primeiro valor é superior ao segundo
  console.log(`${a} é maior que ${b}.`);
} else if (b > a) {
  // O segundo valor é superior ao primeiro
  console.log(`${b} é maior que ${a}.`);
} else {
  // Ambos os valores são equivalentes
  console.log("Os números são iguais.");
}
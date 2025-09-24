/**
 * Classificação Térmica
 * Categoriza a temperatura atual em faixas de conforto climático
 */

let temperatura: number = 28;

// Determinação da sensação térmica baseada na temperatura
if (temperatura < 15) {
  // Condições climáticas frias
  console.log("Está frio.");
} else if (temperatura <= 25) {
  // Condições climáticas amenas
  console.log("Clima agradável.");
} else {
  // Condições climáticas quentes
  console.log("Está quente.");
}
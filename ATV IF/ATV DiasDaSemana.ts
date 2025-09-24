/**
 * Identificação do Tipo de Dia
 * Classifica os dias em dias de semana ou fins de semana conforme sua representação numérica
 */

let dia: number = 6; // 1=Segunda ... 7=Domingo

// Determinação da categoria do dia
if (dia >= 1 && dia <= 5) {
  // Dias de segunda a sexta-feira
  console.log("Dia útil.");
} else if (dia === 6 || dia === 7) {
  // Dias de sábado e domingo
  console.log("Final de semana.");
} else {
  // Valor fora do padrão esperado
  console.log("Número inválido para dia.");
}
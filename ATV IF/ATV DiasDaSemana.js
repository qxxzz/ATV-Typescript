/**
 * Classificação de Dias da Semana
 * Categoriza os dias em dias úteis ou fins de semana baseado na numeração
 */
var dia = 6; // 1=Segunda ... 7=Domingo

// Verificação do tipo de dia conforme a numeração
if (dia >= 1 && dia <= 5) {
    // Dias de segunda a sexta-feira
    console.log("Dia útil.");
}
else if (dia === 6 || dia === 7) {
    // Sábado ou domingo
    console.log("Final de semana.");
}
else {
    // Valor fora do intervalo esperado
    console.log("Número inválido para dia.");
}
/**
 * Avaliação de Condições Climáticas
 * Classifica a temperatura em categorias de sensação térmica
 */
var temperatura = 28;

// Análise da temperatura para classificação climática
if (temperatura < 15) {
    // Condições de baixa temperatura
    console.log("Está frio.");
}
else if (temperatura <= 25) {
    // Faixa de temperatura ideal
    console.log("Clima agradável.");
}
else {
    // Condições de alta temperatura
    console.log("Está quente.");
}
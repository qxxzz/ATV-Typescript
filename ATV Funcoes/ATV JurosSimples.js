/**
 * Função de Cálculo de Juros Simples
 * Determina o montante final aplicando juros proporcionais ao capital inicial
 */
function jurosSimples(capital, taxa, tempo) {
    // Calcula o valor futuro somando os juros ao capital original
    return capital + (capital * taxa * tempo);
}
// Exemplo de aplicação financeira com juros simples
console.log("VF = R$ ".concat(jurosSimples(1000, 0.05, 12).toFixed(2)));
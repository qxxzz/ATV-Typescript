/**
 * Função de Operações Aritméticas Básicas
 * Realiza cálculos matemáticos elementares conforme o operador especificado
 */
function calculadora(a, b, op) {
    // Executa adição quando o operador é '+'
    if (op === "+")
        return a + b;
    // Executa subtração quando o operador é '-'
    if (op === "-")
        return a - b;
    // Executa multiplicação quando o operador é '*'
    if (op === "*")
        return a * b;
    // Executa divisão com verificação de denominador zero
    if (op === "/") {
        if (b === 0) {
            console.log("Erro: divisão por zero.");
            return NaN;
        }
        return a / b;
    }
    // Mensagem para operador não reconhecido
    console.log("Operador inválido!");
    return NaN;
}
// Testes das operações disponíveis
console.log(calculadora(10, 5, "+"));
console.log(calculadora(10, 5, "-"));
console.log(calculadora(10, 5, "*"));
console.log(calculadora(10, 5, "/"));
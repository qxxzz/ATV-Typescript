/**
 * Recebe dois números e um operador (+, -, *, /).
 * Retorna o cálculo correspondente e impede divisão por zero.
 */

function calcular(a, b, op) {
    if (op === "+")
        return a + b; // soma
    if (op === "-")
        return a - b; // subtração
    if (op === "*")
        return a * b; // multiplicação
    if (op === "/") {
        if (b === 0) {
            console.log("Erro: divisão por zero."); // valida divisão
            return NaN;
        }
        return a / b; // divisão
    }
    console.log("Operação inválida. Use +, -, * ou /."); // operador incorreto
    return NaN;
}

// Testes de uso da função
console.log("10 + 5 = ".concat(calcular(10, 5, "+")));
console.log("10 - 5 = ".concat(calcular(10, 5, "-")));
console.log("10 * 5 = ".concat(calcular(10, 5, "*")));
console.log("10 / 5 = ".concat(calcular(10, 5, "/")));

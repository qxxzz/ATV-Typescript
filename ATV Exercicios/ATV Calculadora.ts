/**
 * Recebe dois números e um operador matemático (+, -, *, /).
 * Retorna o resultado correspondente e impede divisão por zero.
 */

function calcular(a: number, b: number, op: string): number {
  if (op === "+") return a + b; // operação de soma
  if (op === "-") return a - b; // operação de subtração
  if (op === "*") return a * b; // operação de multiplicação
  if (op === "/") {
    if (b === 0) {
      console.log("Erro: divisão por zero."); // valida divisão por zero
      return NaN;
    }
    return a / b; // operação de divisão
  }

  console.log("Operação inválida. Use +, -, * ou /."); // mensagem para operador incorreto
  return NaN;
}

// Exemplos de uso da função
console.log(`10 + 5 = ${calcular(10, 5, "+")}`);
console.log(`10 - 5 = ${calcular(10, 5, "-")}`);
console.log(`10 * 5 = ${calcular(10, 5, "*")}`);
console.log(`10 / 5 = ${calcular(10, 5, "/")}`);

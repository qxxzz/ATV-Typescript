/**
 * Função de Cálculo Aritmético Versátil
 * Processa operações matemáticas fundamentais baseada no operador fornecido
 */

function calculadora(a: number, b: number, op: string): number {
  // Realiza operação de adição
  if (op === "+") return a + b;
  // Realiza operação de subtração
  if (op === "-") return a - b;
  // Realiza operação de multiplicação
  if (op === "*") return a * b;
  // Gerencia operação de divisão com controle de erro
  if (op === "/") {
    if (b === 0) {
      console.log("Erro: divisão por zero.");
      return NaN;
    }
    return a / b;
  }
  // Retorna erro para operador não suportado
  console.log("Operador inválido!");
  return NaN;
}

// Demonstração das funcionalidades da calculadora
console.log(calculadora(10, 5, "+"));
console.log(calculadora(10, 5, "-"));
console.log(calculadora(10, 5, "*"));
console.log(calculadora(10, 5, "/"));
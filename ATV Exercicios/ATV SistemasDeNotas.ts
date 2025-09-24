/**
 * Retorna o conceito baseado na nota:
 * A (>=90), B (>=80), C (>=70), D (>=60), F (<60)
 */
function conceito(nota: number): string {
  if (nota >= 90) return "A"; // excelente
  else if (nota >= 80) return "B"; // bom
  else if (nota >= 70) return "C"; // médio
  else if (nota >= 60) return "D"; // abaixo da média
  else return "F"; // insuficiente
}

// Exemplos de uso da função
console.log(`Nota 95 -> Conceito ${conceito(95)}`);
console.log(`Nota 82 -> Conceito ${conceito(82)}`);
console.log(`Nota 73 -> Conceito ${conceito(73)}`);
console.log(`Nota 61 -> Conceito ${conceito(61)}`);
console.log(`Nota 42 -> Conceito ${conceito(42)}`);

/**
 * Critério: A (>=90), B (>=80), C (>=70), D (>=60), F (<60)
 */
function conceito(nota) {
    if (nota >= 90)
        return "A"; // nota excelente
    else if (nota >= 80)
        return "B"; // nota boa
    else if (nota >= 70)
        return "C"; // nota média
    else if (nota >= 60)
        return "D"; // nota baixa
    else
        return "F"; // nota insuficiente
}

// Exemplos de uso
console.log("Nota 95 -> Conceito ".concat(conceito(95)));
console.log("Nota 82 -> Conceito ".concat(conceito(82)));
console.log("Nota 73 -> Conceito ".concat(conceito(73)));
console.log("Nota 61 -> Conceito ".concat(conceito(61)));
console.log("Nota 42 -> Conceito ".concat(conceito(42)));

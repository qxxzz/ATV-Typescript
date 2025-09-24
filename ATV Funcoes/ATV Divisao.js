/**
 * Realiza Operação de Divisão Segura
 * Esta função foi criada para dividir um número por outro.
 * Inclui uma verificação para evitar a divisão por zero, retornando 'NaN' nesse caso.
 */
function dividir(a, b) {
    // Verifica se o divisor é zero para prevenir um erro de divisão.
    if (b === 0) {
        // Alerta o usuário sobre a tentativa de divisão por zero.
        console.log("Erro: divisão por zero");
        // Retorna 'NaN' (Not a Number) para indicar um resultado indefinido.
        return NaN;
    }
    // Executa a operação de divisão e retorna o quociente.
    return a / b;
}
// Chama a função 'dividir' com valores de exemplo e exibe o resultado da operação.
console.log("Resultado: ".concat(dividir(20, 4)));
/**
 * Função de Cálculo de Montante com Juros Simples
 * Computa o valor futuro baseado no regime de capitalização linear
 */

function jurosSimples(capital: number, taxa: number, tempo: number): number {
  // Retorna o montante total após aplicação dos juros
  return capital + (capital * taxa * tempo);
}

// Demonstração do cálculo para um investimento básico
console.log(`VF = R$ ${jurosSimples(1000, 0.05, 12).toFixed(2)}`);
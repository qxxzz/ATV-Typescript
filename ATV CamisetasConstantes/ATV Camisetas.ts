// Define o valor da camiseta antes do desconto
const camiseta1: number = 80;

// Define a taxa de desconto (15%)
const desconto1: number = 0.15;

// Determina o valor que será descontado
const valorDesconto1: number = camiseta1 * desconto1;

// Determina o preço final aplicando o desconto
const precoFinal1: number = camiseta1 - valorDesconto1;

// Exibe no console os resultados
console.log("Preço original: R$", camiseta1);
console.log("Desconto: R$", valorDesconto1);
console.log("Preço final com desconto: R$", precoFinal1);

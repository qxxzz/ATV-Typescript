/**
 * Verificação de Condição Triangular
 * Confirma se três segmentos podem constituir um triângulo mediante a regra geométrica fundamental
 */

let lado1: number = 5;
let lado2: number = 7;
let lado3: number = 10;

// Teste das condições necessárias para existência do triângulo
if (lado1 < lado2 + lado3 &&
    lado2 < lado1 + lado3 &&
    lado3 < lado1 + lado2) {
  // Os lados obedecem ao princípio da desigualdade triangular
  console.log("Forma um triângulo válido.");
} else {
  // Os lados fornecidos não permitem a construção de um triângulo
  console.log("Não forma um triângulo.");
}
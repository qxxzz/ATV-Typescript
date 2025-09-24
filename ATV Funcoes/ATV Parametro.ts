/**
 * Função de Cumprimento Personalizável
 * Apresenta uma saudação individualizada utilizando o nome informado
 */

function dizerOla(nome: string): void {
  // Exibe mensagem de boas-vindas personalizada
  console.log(`Olá, ${nome}!`);
}

// Invocações da função com distintos nomes
dizerOla("Eduardo");
dizerOla("Pietro");
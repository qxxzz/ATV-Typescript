// Declaração de uma variável "mes" do tipo number e atribuição do valor 4
var mes = 4;

// Estrutura switch para verificar o valor de "mes" e exibir o mês correspondente
switch (mes) {
    case 1: // verifica se mes é 1
        console.log("Janeiro"); // exibe Janeiro
        break; // interrompe a execução para evitar executar outros cases
    case 2:
        console.log("Fevereiro"); // exibe Fevereiro
        break;
    case 3:
        console.log("Março"); // exibe Março
        break;
    case 4:
        console.log("Abril"); // exibe Abril se mes for 4
        break;
    case 5:
        console.log("Maio"); // exibe Maio
        break;
    case 6:
        console.log("Junho"); // exibe Junho
        break;
    case 7:
        console.log("Julho"); // exibe Julho
        break;
    case 8:
        console.log("Agosto"); // exibe Agosto
        break;
    case 9:
        console.log("Setembro"); // exibe Setembro
        break;
    case 10:
        console.log("Outubro"); // exibe Outubro
        break;
    case 11:
        console.log("Novembro"); // exibe Novembro
        break;
    case 12:
        console.log("Dezembro"); // exibe Dezembro
        break;
    default: // executado se nenhum case corresponder
        console.log("Mês inválido"); // exibe mensagem de erro
}

/**
 * Procura um valor em um array; se encontrado, interrompe a busca com break.
 */
var lista = ["sql", "ts", "js", "python", "go"]; // array de elementos
var alvo = "python";                              // valor a ser procurado
var pos = 0;                                      // posição inicial
var encontrado = false;                           // flag de status

// Loop enquanto não chegar ao fim do array
while (pos < lista.length) {
    if (lista[pos] === alvo) {
        encontrado = true;
        break; // interrompe o loop ao encontrar o valor
    }
    pos++; // avança para a próxima posição
}

// Exibe resultado da busca
console.log(encontrado ? "Encontrado em lista[".concat(pos, "]") : "Não encontrado");

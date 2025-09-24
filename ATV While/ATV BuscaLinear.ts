/**
 * Verifique se um valor existe no array; se achar, pare (break).
 */
let lista: string[] = ["sql", "ts", "js", "python", "go"]; // array de elementos
let alvo: string = "python";                                // valor a ser procurado
let pos: number = 0;                                        // posição inicial
let encontrado: boolean = false;                            // flag de status

// Loop enquanto não chegar ao fim do array
while (pos < lista.length) {
    if (lista[pos] === alvo) {
        encontrado = true;
        break; // interrompe o loop ao encontrar o valor
    }
    pos++; // avança para a próxima posição
}

// Exibe resultado da busca
console.log(encontrado ? `Encontrado em lista[${pos}]` : "Não encontrado");

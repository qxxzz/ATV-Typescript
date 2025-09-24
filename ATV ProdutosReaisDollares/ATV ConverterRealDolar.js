// Função que converte o preço em dólares para reais, aplica IOF e calcula o preço de venda
function converterPrecoParaReais1(precoEmDolar1, taxaDeCambio1, iof1, lucro1) {
    if (iof1 === void 0) { iof1 = 6.38; } // valor padrão do IOF
    if (lucro1 === void 0) { lucro1 = 45; } // valor padrão de lucro em %

    var precoEmReais1 = precoEmDolar1 * taxaDeCambio1; // converte dólar para reais
    var valorIOF1 = precoEmReais1 * (iof1 / 100); // calcula valor do IOF
    var precoComIOF1 = precoEmReais1 + valorIOF1; // aplica o IOF

    // calcula preço de venda incluindo lucro
    var precoVenda1 = precoComIOF1 * (1 + lucro1 / 100);

    return { precoEmReais1: precoEmReais1, valorIOF1: valorIOF1, precoComIOF1: precoComIOF1, precoVenda1: precoVenda1 };
}

// Lista de produtos com preço em dólares
var produtos1 = [
    { nome1: "Mouse", precoEmDolar1: 25 },
    { nome1: "Teclado", precoEmDolar1: 40 },
    { nome1: "Monitor", precoEmDolar1: 200 },
    { nome1: "HD Externo", precoEmDolar1: 100 },
    { nome1: "SSD", precoEmDolar1: 120 },
    { nome1: "Placa de Vídeo", precoEmDolar1: 500 },
    { nome1: "Processador", precoEmDolar1: 300 },
    { nome1: "Memória RAM", precoEmDolar1: 80 },
    { nome1: "Fonte", precoEmDolar1: 150 },
    { nome1: "Gabinete", precoEmDolar1: 70 },
];

// Taxa de câmbio usada para conversão
var taxaDeCambio1 = 5.10;

// Converte preços para reais e calcula preço de venda
produtos1.forEach(function (produto1) {
    var _a = converterPrecoParaReais1(produto1.precoEmDolar1, taxaDeCambio1), precoEmReais1 = _a.precoEmReais1, valorIOF1 = _a.valorIOF1, precoComIOF1 = _a.precoComIOF1, precoVenda1 = _a.precoVenda1;

    console.log("Produto: ".concat(produto1.nome1));
    console.log("Preço em Dólares: $".concat(produto1.precoEmDolar1.toFixed(2)));
    console.log("Preço em Reais (sem IOF): R$ ".concat(precoEmReais1.toFixed(2)));
    console.log("Valor do IOF: R$ ".concat(valorIOF1.toFixed(2)));
    console.log("Preço final com IOF: R$ ".concat(precoComIOF1.toFixed(2)));
    console.log("Preço de venda (com 45% de lucro): R$ ".concat(precoVenda1.toFixed(2), "\n"));
});

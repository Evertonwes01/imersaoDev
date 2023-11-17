var nome = window.prompt('Digite seu nome')
var valorEmBitCoin = Number(window.prompt('Digite o valor'))
var cotacaoDoBitCoin = 177773.35;

var valorEmReal = valorEmBitCoin * cotacaoDoBitCoin;
valorEmReal = valorEmReal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
alert(`Olá ${nome} o valor de ${valorEmBitCoin} BitCoin em reais é ${valorEmReal}`);
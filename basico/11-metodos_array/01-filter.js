/*
Filter -> é usado para filtrar os itens de um array e apenas devolver aqueles que satisfazem a condição passada na função.

Argumentos:
1-Valor atual: É o item atual do array com que a função está trabalhando

2-Índice ou index: Esse valor é o índice do item dentro do array no qual você está trabalhando.

3-Array original: Você pode pegar todo o array e trabalhar com ele dentro do filter também.

Os 3 argumentos são recebidos na função de callback que você irá passar para dentro do map.

  'O segundo e terceiro parâmetro (Índice e Array original) se repetem logo não irei adicionar novos exemplos deles.'

*/
const numerosFilter = [1,2,3,4,5];
const apenasNumerosImpares = numerosFilter.filter((numero, indice, array) => {
    return numero % 2 !== 0;
});
console.log(apenasNumerosImpares)
/*
* Saida 
* [ 1, 3, 5 ]
*/
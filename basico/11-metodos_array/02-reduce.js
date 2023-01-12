/*
Reduce -> Como o nome sugere o método reduce é usado para reduzir o array para um único valor.

Argumentos:
1-Acumulador: Essa parâmetro é responsável por guardar todo o valor acumulado durante a execução do reduce. O mesmo será retorno no fim da execução.

2-Valor atual: É o valor atual do array.

3-Índice ou index: Esse valor é o índice do item dentro do array no qual você está trabalhando.

4-Array original: Você pode pegar todo o array e trabalhar com ele dentro do filter também.
*/
const numerosReduce = [1,2,3,4,5];
const somaDeTodosOsValoresDoArray = numerosReduce.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
});
console.log(somaDeTodosOsValoresDoArray);
/*
* Saida 
* > 15
*/
const nomeReduce = ['D','a','n','i','e','l'];
const nomeConcatenado = nomeReduce.reduce((acumulador, letra) => {
    return acumulador + letra;
});
console.log(nomeConcatenado);
/*
* Saida 
* > Daniel
*/
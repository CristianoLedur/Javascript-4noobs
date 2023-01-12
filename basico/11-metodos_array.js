console.log("1.11 - Básico - Principais métoodos de Array");

/* 
Map -> é utilizado geralmente quando você deseja percorrer um array e fazer uma alteração em cada elemento. E como consequência o método map gerar um array novo.

Argumentos:
1-Valor atual: É o item atual do array com que a função está trabalhando

2-Índice ou index: Esse valor é o índice do item dentro do array no qual você está trabalhando.

3-Array original: Você pode pegar todo o array e trabalhar com ele dentro do map também.

Os 3 argumentos são recebidos na função de callback que você irá passar para dentro do map.
*/
const numerosMap = [1,2,3,4,5];
const adicionarUm = numerosMap.map((number, index, array) => {  
    console.log(`Índice ${index} - Number: ${number}`);
    console.log('Array de origem:');
    console.table(array); // Vai mostrar o índice e cada valor do array no índice em questão
    return number + 1;
})
console.log(adicionarUm);
/* Saida
 *  Índice 0 - Number: 1
    Array de origem:
    Índice 1 - Number: 2
    Array de origem:
    Índice 2 - Number: 3
    Array de origem:
    Índice 3 - Number: 4
    Array de origem:
    Índice 4 - Number: 5
    Array de origem:
    [ 2, 3, 4, 5, 6 ]
 */




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



/* 
Join -> junta todos os elementos de um array em uma única string.

Argumentos:
1-Separador: Especifica a string que vai separar os elementos
  'Caso o separador seja omitido, os elementos vão ser separados por virgula'
*/
const palavras = ["Aprendendo", "como", "o", "Javascript", "funciona"];
const frase = palavras.join(" ");
console.log(frase);
  
/**
* Saida
* > Aprendendo como o Javascript funciona
*/
  
// Note que o separador é um espaço em branco " ", é diferente de ""
// Se o separador fosse "", as palavras não iriam ser separadas por espaço



/* 
Push -> adiciona N elementos no final do array e retorna o valor do novo tamanho do array
Argumentos:
1-Elementos a serem adicionados
*/
const numerosPush = [1,2,3,4,5];
const novoTamanho = numerosPush.push(6,7,8,9);
console.log(numerosPush); // Saida: [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(novoTamanho); // Saida: 9



/* 
Pop -> remove o último elemento do array, e retorna o valor do elemento removido

  'Pop não recebe parãmetros'
*/
const numerosPop = [1, 2, 3, 4, 5];
const elementoRemovido = numerosPop.pop();
console.log(numerosPop); // Saida: [1, 2, 3, 4]
console.log(elementoRemovido); // Saida: 5



/* 
Unshift -> adiciona N elementos no inicio do array e, assim como o push, retorna o valor do novo tamanho do array

Argumentos:
1-Elementos a serem adicionados
*/
const numerosUnshift = [5, 6, 7, 8];
const novoTamanhoUnshift = numerosUnshift.unshift(1, 2, 3, 4);
console.log(numerosUnshift); // Saida: [1, 2, 3, 4, 5, 6, 7, 8]
console.log(novoTamanhoUnshift); // Saida: 8



/* 
Shift -> remove o primeiro elemento do array, e assim como o método pop, retorna o valor do elemento removido

  'Shift não recebe parãmetros'
*/
const numerosShift = [1, 2, 3, 4, 5];
const elementoRemovidoShift = numerosShift.shift();
console.log(numerosShift); // Saida: [2, 3, 4, 5]
console.log(elementoRemovidoShift); // Saida: 1



/* 
Concat -> O método concat concatena os dados de um ou mais arrays

Argumentos:
1-Array a se concatenar
*/
const comidas = ["Cereal","Sanduíche","Mingau"];
const bebidas = ["Café","Suco de Laranja"];
const cafeDaManha = comidas.concat(bebidas);
console.log(cafeDaManha); // Saida: ["Cereal","Sanduíche","Mingau","Café","Suco de Laranja"]



/* Length -> O método length retorna o tamanho de um array

  'length não recebe parâmetros'
*/
const linguagens = ["Javascript","C#","PHP","Golang"];
const tamanho = linguagens.length;
console.log(tamanho); // Saida: 4



/* 
Every -> O método every passa por todos elementos do array, verificando se todos os elementos do array obedecem ao critério retornando true ou falso

Argumentos:
1-Elementos a serem verificados
*/
const numbersEvery = [2,4,6,8,10,12];
console.log(numbersEvery.every(number => number%2 == 0)); //true pois verificou que todos os numeros são pares



/*
Some -> O método some passa por todos elementos do array, verificando se pelo menos 1 dos elementos obedece as condições e retorna true

Argumentos:
1-Elementos a serem verificados
*/
const users = ["Luiz","Carla","Daniel","Vanessa"];
if (users.some(user => user === "Daniel")) { //true pois o usuário Daniel já existe dentro do array
    console.log("User already exists!");
}
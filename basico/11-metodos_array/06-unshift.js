/* 
Unshift -> adiciona N elementos no inicio do array e, assim como o push, retorna o valor do novo tamanho do array

Argumentos:
1-Elementos a serem adicionados
*/
const numerosUnshift = [5, 6, 7, 8];
const novoTamanhoUnshift = numerosUnshift.unshift(1, 2, 3, 4);
console.log(numerosUnshift); // Saida: [1, 2, 3, 4, 5, 6, 7, 8]
console.log(novoTamanhoUnshift); // Saida: 8

/* Map -> é utilizado geralmente quando você deseja percorrer um array e fazer uma alteração em cada elemento. E como consequência o método map gerar um array novo.

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


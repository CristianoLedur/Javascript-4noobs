/* 
Every -> O método every passa por todos elementos do array, verificando se todos os elementos do array obedecem ao critério retornando true ou falso

Argumentos:
1-Elementos a serem verificados
*/
const numbersEvery = [2,4,6,8,10,12];
console.log(numbersEvery.every(number => number%2 == 0)); //true pois verificou que todos os numeros são pares

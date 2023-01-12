console.log("1.7 - Básico - Estruturas  de repetição");

// For -> Um laço for é repetido até que a condição especificada seja FALSE.

/*
for ([expressaoInicial]; [condicao]; [incremento]) {
  // ações a serem repetidas
}
*/

// do .. while -> A instrução do...while repetirá até que a condição especificada seja FALSE.
/*
do {
  // ações a serem repetidas
} while (condicao);
*/

// While -> Uma declaração while executa suas instruções, desde que uma condição especificada seja avaliada como TRUE.
/*
while (condicao) {
    // ações a serem repetidas
}
*/

// For ... in -> O laço for.. in passa por todas propriedades de um objeto.
const numeros = [1,2,3,4,5];
for ( numero in numeros) {
  // ações a serem feitas
  console.log(numero);
}

// resultado: 1, 2, 3, 4, 5

// For ... of -> O laço for.. of passa por todos os elementos de um coleção (Array, Map, Set, Arguments, Object).
for (numero of numeros) {
  // ações a serem feitas
  console.log(numero);
}

// resultado: 0, 1, 2, 3, 4

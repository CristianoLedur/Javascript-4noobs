// For ... of -> O laço for.. of passa por todos os elementos de um coleção (Array, Map, Set, Arguments, Object).
const numeros = [1,2,3,4,5];
for (numero of numeros) {
  // ações a serem feitas
  console.log(numero);
}

// resultado: 0, 1, 2, 3, 4
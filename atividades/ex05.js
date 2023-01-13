/*
05 - Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. Deverá diferenciar
números de strings.

Exemplo:

maiorOuIgual(0, 0) // retornará true
maiorOuIgual(0, "0") //retornará false
*/

function maiorOuIgual(n1, n2) {
  if (n1 === n2) {
    return true;
  } else {
    return false;
  }
}

console.log(maiorOuIgual(0 , 0));
console.log(maiorOuIgual(0, "0"));
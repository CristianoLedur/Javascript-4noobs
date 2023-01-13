/*
06 - Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro de
entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo ...".

Exemplo: 

inverso(true) // retornará false
inverso("6") // retornará "booleano ou número esperados, mas o parâmetro é do tipo string"
*/

function inverso(valor) {
  if ((typeof valor) === "number") {
    return -valor;
  } else if ((typeof valor) === "boolean") {
    return !valor;
  } else {
    return "booleano ou número esperados, mas o parâmetro é do tipo " + typeof valor;
  }
}
console.log(inverso(6));
console.log(inverso(true));
console.log(inverso("6"));
console.log(inverso(null));
console.log(inverso(undefined));
console.log(inverso(Object));
console.log(inverso([0,1,3]));
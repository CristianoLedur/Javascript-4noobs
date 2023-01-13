/*
10 - Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.

Exemplo:

simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"
*/

function simboloMais(x) {
  let mais = "";
  for(let i = 0; i < x; i++) {
    mais += "+";
  }
  return mais;
}

function simboloMaisFacil(x) {
  return "+".repeat(x);
}

console.log(simboloMais(2));
console.log(simboloMaisFacil(4));
console.log("1.12 - Básico - Entendendo o this no Javascript");
// No primeiro exemplo, teremos a let C dentro do escopo da função.
function Exemplo() {
  let c = 10;
  return console.log(c);
}
Exemplo();
console.log(c);

// Espera-se recebermos um erro de que "C" não está definida.

/*Agora faremos um exemplo elevando o escopo da variável c,
 permitindo que ela seja acessada fora do escopo da função */

function Exemplo() {
  this.c = 10;
  return console.log(c);
}
Exemplo();
console.log(c);

// Espera-se receber 10 em ambas as chamadas.

/*
O escopo global: node.
Como dito anteriormente, a palavra this permite que possamos acessar escopos mais elevados do que estamos, sendo o mais alto deles o escopo do próprio node, ganhando acesso a propriedades como o prototype dos objetos, podemos, então, definir uma nova constante dentro da própria classe Object usando o this.

*/

/*
this.Object.prototype = {
  A: "Nova variável"
}
*/
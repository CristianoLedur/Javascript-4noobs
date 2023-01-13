/*
08 - Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.

Exemplo:

multiplicar(5, 5) // retornará 25
multiplicar(0, 7) // retornará 0
*/
function multiplicar(valor1 , valor2) {
  let valor = 0;
  if (valor1 == 0 || valor2 == 0) {
    return 0;
  }
  for(valor1 < 0; valor1--;) {
    valor+=valor2;
  }
  return valor;
}
console.log(multiplicar(5,5));
console.log(multiplicar(0,7));

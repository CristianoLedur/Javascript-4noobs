console.log("1.4 - Básico - Operadores Aritméticos");

/*Os operadores aritméticos padrões são:

os de soma (+)
subtração (-)
multiplicação (*)
divisão (/)
Módulo(Resto da Divisão) (%) -> Irá retornar o resto da divisão.
Exponencial (**) -> Retorna o resultado de uma variável elevada a outra.

*/

//Incremento -> O operadaor de incremento acrescenta um no dado tratado.
//           -> Se usado depois da variável, ele incrementa o valor depois retorna.
let numero  = 1;
console.log(numero); // 1
console.log(numero++); // 1
console.log(numero); // 2

//            -> Se usado antes da variável, ele retorna o valor depois incrementa.
let numero1 = 1;
console.log(numero1); // 1
console.log(++numero1); // 2
console.log(numero1); // 2

// Decremento -> o operador de decremento subtrai um no dado tratado.
//            -> Se usado depois da variável, ele subtrai o valor depois retorna.
let numero2  = 2;
console.log(numero2); // 2
console.log(numero2--); // 1
console.log(numero2); // 1

//            -> Se usado antes da variável, ele retorna o valor depois incrementa.
let numero3 = 2;
console.log(numero3); // 2
console.log(--numero3); // 2
console.log(numero3); // 1

// Negação -> O operador de negação unária precede seu operando e o nega.
let numero5 = 1;
console.log(numero5); // 1
console.log(-numero5); // -1

// Soma Unárria -> o '+' antes de uma variável, é a forma mais rápida e a forma preferida de converter alguma coisa em um número.
console.log(+3); // 3
console.log(+"3"); // 3
console.log(+true); // 1
console.log(+false); // 0
console.log(+null); // 0
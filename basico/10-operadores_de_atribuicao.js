console.log("1.10 - Básico - Operadores de atribuição");

// Operadores de Atribuição -> Operadores de atribuição são capazes de atribuir valores ao operando da esquerda baseado no operando da direita.

console.table([["Operador","Significado"],["x = y", "x = y"],["x += y", "x = x + y"],["x -= y","x = x - y"],["x *= y","	x = x * y"],["x /= y","x = x / y"],["x **= y","x = x ** y"],["x %= y","x = x % y"]]);

// Exemplos de uso
let foo = 2;
const bar = 3;

foo += bar; // foo = foo + bar = 2 + 3
console.log(foo); // 5

foo *= bar; // foo = foo * bar = 5 * 3
console.log(foo); // 15

//Exemplos de erro
foo =+ '9'; // foo = +'9' = 9
console.log(foo); // 9

foo =- '9'; // foo = -'9' = -9
console.log(foo); // -9

//foo =* 5; -> Erro de sintaxe
console.log(foo); // Não é executado pois ocorreu um erro na linha anterior
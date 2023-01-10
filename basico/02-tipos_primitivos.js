console.log("1.2 - Básico - Tipos de dados primitivos");

// String -> O tipo String em JavaScript é usado para representar textos ou cadeidas de caracteres.
console.log("String");
const texto = `Valor: ${8}`; // ` ` é chamado de template string

// Numbers -> O tipo Number é usado para representar números, independente se for um número inteiro tipo 7 ou um número real como 32.4.
console.log("Numbers");
const valor = 8;
console.log(valor);

// Boolean -> Representa uma entidade lógica e pode ter dois valores: verdadeiro ou falso.
console.log("Boolean");
console.log(1 == 1);
console.log(1 != 1);

// bigInt -> é um tipo de dado numérico que representa inteiros no formato de precisão arbitrária.
console.log("bigInt");
// fonte https://www.thiagotec.com/blog/tipos-numericos-no-javascript#:~:text=e%20pelo%20Node.-,Aritm%C3%A9tica%20Em%20JavaScript,-Os%20programas%20JavaScript

/* Literais Inteiros de base 10
3

Literais Inteiros de base 16 (hexadecimal)
0xff // => 255: (15*16 + 15)

Literais Inteiros de base 8 (octal)
0o377 // => 255: (3*64 + 7*8 + 7*1)

Literais Inteiros de base 2 (binária)
0b10101 // => 21: (1*16 + 0*8 + 1*4 + 0*2 + 1*1)
*/

// Arrays -> é uma variável que contem vários valores. Ele é comumente usado para armazenar um grupo de valores relacionados.
console.log("Arrays");
const numeros = [1, 2, 3, 4, 5, 6];
const palavras = ["He4art", "Devs", "Melhor", "Comunidade"];
const misto = ["He4rt", 1, 27.5, 3];
const array_com_arrays = ["He4rt", "Dev", [1, "Melhor Comunidade"]];

// Objetos -> São muito semelhantes aos Arrays, pois são variáveis que podem conter vários valores.
console.log("Objetos");
const professor = {
  nome: "He4rt",
  nota: 10, // avaliação do professor
  classes: [1, 2, 3, 4, 5] //ids das classes que leciona.
}

// Null e Undefined -> O tipo Null tem exatamente um valor nulo.
//                  ->  Uma variável que não tenha recebido nenhum vallor específico, assume um valor undefined.
console.log("Null e Undefined");
const nulo = null;
const indefinido = undefined;

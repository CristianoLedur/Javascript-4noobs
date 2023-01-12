/* 
Join -> junta todos os elementos de um array em uma única string.

Argumentos:
1-Separador: Especifica a string que vai separar os elementos
  'Caso o separador seja omitido, os elementos vão ser separados por virgula'
*/
const palavras = ["Aprendendo", "como", "o", "Javascript", "funciona"];
const frase = palavras.join(" ");
console.log(frase);
  
/**
* Saida
* > Aprendendo como o Javascript funciona
*/
  
// Note que o separador é um espaço em branco " ", é diferente de ""
// Se o separador fosse "", as palavras não iriam ser separadas por espaço
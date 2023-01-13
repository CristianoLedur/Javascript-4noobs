console.log("2.2 - DOM - Acessando Elementos");

/*
  - Métodos para encontrar um ou mais elementos no DOM.
É possível localizar elementos HTML:

1- por ID;
2- por data-attribute;
3- pelo nome da tag;
4- pelo nome da classe;
5- por seletores CSS;
6- por coleções de objetos HTML.
*/

console.table([["Método", "Descrição"],["document.getElementById(id)","Encontra um elemento por seu Id"],["document.querySelector([data-attribute])","Encontra um elemento por seu data-attribute"],["document.getElementsByClassName(nome)","Encontra um elemento pela classe"],["document.getElementsByTagName(tag)","Encontra um elemento pela sua tag HTML"],["document.querySelector(nome)","Encontra o primeiro elemento com o valor informado (id, nome, tag, data-attribute)"],["document.querySelectorAll(name)","Encontra todos os elementos com o valor informado (id, nome, tag, data-attribute)"]]);
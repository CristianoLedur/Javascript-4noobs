console.log("1.13 - Básico - Objetos");

// Objetos -> o que é um objeto?
/*
É bem simples. Podemos imaginar um objeto como sendo uma gaveta, onde nessa gaveta existem pastas. Cada dado é armazenado em seu arquivo pela chave. Confira na figura a seguir:

(imagem de gavetaObjeto)

A sintaxe de um objeto também é bem simples. Exemplo:
*/

let he4rt = {
  comunidade: "Ativa",
  devs: "Incríveis"
};




//Também é possível criar um objeto vazio através do "object constructor". Exemplo:

var user = new Object();
var user = {};



// Para adicionar porteriormente uma key num objeto já criado, basta usar o ponto (.). Exemplo:

let he4rt2 = {
  comunidade: "Ativa",
  devs: "Incríveis"
};
console.log(he4rt2) // {comunidade: "Ativa", devs: "Incríveis"}
// ADICIONANDO UMA NOVA KEY
he4rt2.key = "adicionada"
console.log(he4rt2) // {comunidade: "Ativa", devs: "Incríveis", key: "adicionada"}



//Outra forma de adicionar objetos, é usando []. Exemplo:

let he4rt3 = {
  comunidade: "Ativa",
  devs: "Incríveis"
};

he4rt3["nome"] = "Vitor"

console.log(he4rt3) // {comunidade: "Ativa", devs: "Incríveis", nome: "Vitor"}

//Agora que conseguimos declara-los em hard code, um vazio, e adicionar uma chave em um objeto já declarado, como remover? Exemplo:

let he4rt4 = {
  comunidade: "Ativa",
  devs: "Incríveis"
};
console.log(he4rt4) // {comunidade: "Ativa", devs: "Incríveis"}

delete he4rt4.devs;
console.log(he4rt4) // {comunidade: "Ativa"}




// Acessando objetos -> Agora que conseguimos manipular criação e como deletar chaves num objeto, como podemos imprimir a frase "Hello World" usando duas keys dentro de um objeto? Simples.

let helloWorld = {
    hello: "Hello ",
    world: "World"
}

console.log(helloWorld.hello + helloWorld.world) // Hello World
// Aqui, estou dizendo para. entrar em "helloWorld" e acessar "hello." Dessa forma, o "console.log" conseguiu imprimir a string da chave.
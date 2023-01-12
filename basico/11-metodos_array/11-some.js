/*
Some -> O método some passa por todos elementos do array, verificando se pelo menos 1 dos elementos obedece as condições e retorna true

Argumentos:
1-Elementos a serem verificados
*/
const users = ["Luiz","Carla","Daniel","Vanessa"];
if (users.some(user => user === "Daniel")) { //true pois o usuário Daniel já existe dentro do array
    console.log("User already exists!");
}
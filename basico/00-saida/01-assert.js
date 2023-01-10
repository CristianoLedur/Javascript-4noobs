// função Assert -> Escreve uma mensagem de erro para o console caso o argumento seja false
console.log("------> Função console.assert()  <------");
const boolean = false;
console.assert(boolean, "mensagem a ser exibida se o boolean forr falso");
//outro exemplo, recebendo tru como argumento
console.assert((5+4)> 8, "mensagem a ser exibida se o boolean for falso"); // não acontece nada...
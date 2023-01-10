console.log("1.1 - Básico - Saída")

//função console.log() -> exibe uma mensagem no console do navegador
console.log("------> Função console.log() <------");
console.log("HeartDevs <3");
console.log(123);
console.log([1, 2, 3]);
console.log({ curso: "js4noobs" });

// função Assert -> Escreve uma mensagem de erro para o console caso o argumento seja false
console.log("------> Função console.assert()  <------");
const boolean = false;
console.assert(boolean, "mensagem a ser exibida se o boolean forr falso");
//outro exemplo, recebendo tru como argumento
console.assert((5+4)> 8, "mensagem a ser exibida se o boolean for falso"); // não acontece nada...

// função Count -> exibe no console o número de vezes que a chamada count() em particular foi invocada.
console.log("------> Função Count()  <------");
let label = "";
function consoleLabel() {
  console.count(label);
  return "label: " + label;
}

label = "he4rt";
consoleLabel();
label = "devs";
consoleLabel();
consoleLabel();
console.count(); // retornou 'default' ao invés de 'devs' como consta na explicação

// função dir -> Exibe uma lista interativa das proprriedades do objeto JavaScript especificado
console.log("------> Função console.dir()  <------");
const comunidade = {
  nome: "he4rt",
};
console.dir(comunidade);

// Função Error & Exception -> 'Escreve' uma mensagem de erro no Web Console.
console.log("------> Função console.error()  <------");
console.error("Erro aqui irmão!");

console.log("------> Função console.exception() <------");
console.log("console.exception('Erro aqui irmão, mas de outra forma.')"); // exception é utillizado com try catch assim com em java

// Função Group -> Cria e separa as mensagens em grupos alinhados.
console.log("------> Função console.group() <------");
console.log("Canais do discord");
console.group();
console.log("global");
console.group();
console.log("bate-papo");
console.log("aprendizado-diário");
// detalhe aqui para fechar os grupos ate então abertos...
console.groupEnd();
console.groupEnd();

// Função Table -> Exibe as informa;óes em forma  de tabela.
console.log("------> Função console.table() <------");
console.table(["he4rt","devs","discord"]);

// Função Time & TimeEnd -> 'time()' incia um cronometro com precisão de milissegundos.
//                       -> 'timeEnd()' termina e exibe a contagem do tempo
console.log("------> Função console.time() e console.timeEnd() <------");
console.time();
for(let i = 0; i < 10000; ++i) {
  // alguma coisa
};
console.timeEnd();

// for vazio
const label1 = 'for vazio';
console.time(label1);
for(let i = 0; i < 100; ++i) {
};
console.timeEnd(label1);

// Função Warning -> Escreve uma  mensagem de alerta no Console Web.
console.log("------> Função console.warn() <------");
console.warn("Texto de alerta!");

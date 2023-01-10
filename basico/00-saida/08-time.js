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

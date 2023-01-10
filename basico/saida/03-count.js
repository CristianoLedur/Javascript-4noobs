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
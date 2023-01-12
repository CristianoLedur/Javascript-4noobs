// Switch -> Eles tomam uma única expressão/valor como uma entrada e, em seguida, examinam várias opções até encontrarem um que corresponda a esse valor, executando o código correspondente que o acompanha.
switch (expression) {
  case choice1:
    // código para executar
    break;
  case choice2:
    // código para executar
    break;
  // podem ser incluídos quantos casos precisar.
  default:
    // se não for nenhum caso, executa este caso
}

// Switch -> Multi-caso: Operação Simples (Multi-case : single operation) -> Utilizar esse método tem a vantagem de não ter um break depois do case e continuara sendo executado mesmo que o critério não seja correspondido.
var Color = 'Red';
switch (Color) {
  case 'Pink':
  case 'Purple':
  case 'Orange':
    console.log('This is not a primary color.');
    break;
  case 'Blue':
  default:
    console.log('This is a primary color.');
}

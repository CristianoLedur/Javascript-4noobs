console.log("1.6 - Básico - Condicionais");

// Lógicos -> if ... else -> De longe o tipo mais comum de declaração condicional que você usará em JavaScript — as modestas declarações if ... else.
if (condicao) {
  // código para executar caso a condição seja verdadeira
} else {
  // senão, executar este código
}

//         -> else if -> Existe uma maneira de encadear escolhas/resultados extras ao seu if...else — usando else if. Cada escolha extra requer um bloco adicional para colocar entre if() { ... } e else { ... }
if (condicao) {
  // código para executar caso a condição seja verdadeira
} else if (outraCondicao) {
  // senão, executar este código caso outra condição seja verdadeira
}

// Operador ternário ->  Os operadores ternários testam uma condição e retorna um valor/expressão se for TRUE, e outro caso seja FALSE

/*
condicao ? valor1 : valor2;
condicao ? valor1 : outraCondicao ? valor2 : valor3;
*/

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

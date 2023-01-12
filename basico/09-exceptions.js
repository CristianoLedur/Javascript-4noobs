console.log("1.9 - Básico - Exceptions");

//Exception -> Uma exceção representa uma situação que normalmente não ocorre e representa algo de estranho ou inesperado no sistema.
/*
try - permite definir um bloco de código a ser testado quanto a erros enquanto ele está sendo executado.

catch - instrução permite definir um bloco de código a ser executado, se ocorrer um erro no bloco try.

A throw permite criar erros personalizados.

A finally permite executar o código, após tentar e capturar, independentemente do resultado.

*/
function UserException(message) {
  this.message = message;
  this.name = "UserException";
}

function getMonthName(mes) {
  mes = mes - 1; // Ajusta o número do mês para index de array (1=Jan, 12=Dec)
  var meses = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  if (meses[mes] !== undefined) {
    return meses[mes];
  } else {
    throw new UserException("MesInvalido");
  }
}

try {
  // statements to try
  var meuMes = 15; // 15 não é um valor válido.
  nomeMes = getMonthName(meuMes);
  console.log(nomeMes);
} catch (e) {
  nomeMes = "não informado";
  console.log(nomeMes);
  console.log(e.message, e.name); // mostra no console a mensagem e o erro que foram pegos.
}
/* (ChatGPT)
Em JavaScript, uma exceção é um evento que ocorre quando ocorre um erro durante a execução de um programa. Exceções podem ser tratadas usando instruções try-catch. O código que pode gerar uma exceção é colocado em um bloco try e o código que trata a exceção é colocado em um bloco catch. Se uma exceção for lançada no bloco try, o bloco catch será executado. O bloco catch também pode ter um parâmetro opcional para receber o objeto de exceção, que pode ser usado para obter informações sobre a exceção.

Por exemplo:


Copiar código
try {
  // code that might throw an exception
} catch (err) {
  // code that handles the exception
  console.log(err);
}
Você também pode lançar suas próprias exceções usando a instrução "throw".


Copiar código
throw new Error('this is my custom error');
Além disso, o JavaScript também possui um bloco final que será executado independentemente de uma exceção ter sido lançada ou não.


Copiar código
try {
  // code that might throw an exception
} catch (err) {
  // code that handles the exception
  console.log(err);
} finally {
  //code that will always execute
}

*/
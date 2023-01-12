console.log("1.8 - Básico - Funções");

// Funções -> é um bloco de códigos, que conseguimos utilizar sempre que chamarmos em qualquer parte da nossa aplicação, para realizar uma ação.
/* 
Uma função é definida pela palavra reservada function, seguida por um nome e então os parenteses ().

Os nomes das funções podem conter letras, números, sublinhado e caracteres especiais.

Dentro dos parenteses, você insere os parâmetros - os parâmetros são dados enviados a função, aos quais serão processados pela função.

O código a ser executado pela função, deve estar dentro de Chaves {}
*/

/*
(ChatGPT) Em JavaScript, uma função anônima é uma função sem um nome. Elas são geralmente usadas para criar funções de callback, event handlers e IIFE (Immediately Invoked Function Expressions). Elas podem ser atribuídas a variáveis ​​e passadas como argumentos para outras funções. Um exemplo de uma função anônima é:

Copy code
var myFunction = function() {
    console.log("Hello, World!");
}
Ela pode ser chamada através de myFunction();
*/

/*
(ChatGPT) Uma função auto-invocável em JavaScript é uma função que se chama a si mesma imediatamente após sua criação. Isso é feito adicionando parênteses logo após a declaração da função, como no exemplo a seguir:

Copy code
(function () {
  // código da função
})();
As funções auto-invocadas são comumente usadas para criar escopos privados, já que qualquer variável declarada dentro da função só estará disponível dentro desse escopo e não poderá ser acessada de fora. Isso é útil para evitar colisões de nomes e manter o código organizado.
*/
function result() {
  var numero = document.getElementById("number").value;
  var  saida = document.getElementById("escreverResultado");
  if (parseInt(numero) % 2 == 0) {
    saida.innerHTML = "Par";
  } else {
    saida.innerHTML = "Ímpar";
  }
}
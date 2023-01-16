var dataAtual = new Date();
var dia = dataAtual.getDate();
var mes = dataAtual.getMonth() + 1;
var ano = dataAtual.getFullYear();
var data = `${dia}/${mes}/${ano}`;
window.onload = function() {
  document.getElementById("resultado").innerHTML = data;
}
var dataFutura = new Date();
var dia = dataFutura.getDate();
var mes = dataFutura.getMonth() + 2;
var ano = dataFutura.getFullYear();
var data = `${dia}/${mes}/${ano}`;
window.onload = function() {
  document.getElementById("resultado").innerHTML = data;
}
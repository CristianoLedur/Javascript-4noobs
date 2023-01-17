var list = [];
function executar() {
  var valor = document.getElementById("campo").value;
  list.push(valor);
  console.log(valor);
  document.getElementsByClassName('saida')[0].innerHTML = list;
}
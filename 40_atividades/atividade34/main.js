var n = parseInt(Math.random(0,1) * 10);
function sort() {
  var numero = document.getElementById("number").value;
  var saida = document.getElementById("resultado");
  if (n == numero) {
    saida.innerHTML = "Acertou!!!";
  } else {
    saida.innerHTML = "Errrou!!!";
  }
}
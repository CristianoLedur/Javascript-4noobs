function multiplicar() {
  var n1 = document.getElementById("multiplicacao1").value;
  var n2 = document.getElementById("multiplicacao2").value;
  var multiplicacao = (parseInt(n1) * parseInt(n2));
  document.getElementById("resultado-multiplicar").innerHTML = multiplicacao;
}
//por algum motivo não esta funcionando no site, mesmo tendoo o mesmo cóodigo que o do script dentro do index.html

var btn = document.getElementById("botao");
btn.addEventListener("click", function() {
  var textoCompleto = document.getElementById("texto").value;
  var textoSaida = document.getElementById("saida").innerHTML = textoCompleto.length;
});
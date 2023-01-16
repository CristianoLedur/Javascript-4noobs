document.getElementById("botao").addEventListener("click", function() {  
  var valor = document.getElementById("valor").value;
  console.log(valor);
  var total = valor - (valor * 0.05);
  document.getElementById("saidaResultado").innerHTML = total;
});
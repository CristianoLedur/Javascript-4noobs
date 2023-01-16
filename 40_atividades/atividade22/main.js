function verificaIdade() {
  var idade = document.getElementById("idade").value;
  var saida = document.getElementsByTagName('span');
  if (parseInt(idade) >= 18) {
    saida[0].innerHTML = "Maior de idade";
  }  else  {
    saida[0].innerHTML =  "Menor de idade";
  }
}
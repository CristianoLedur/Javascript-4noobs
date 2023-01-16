function somar() {
  var n1 = document.getElementById("soma1").value;
  var n2 = document.getElementById("soma2").value;
  var saida = document.getElementById("resultado-soma");
  var soma = (parseInt(n1) + parseInt(n2));
  saida.innerHTML = soma;
  // fazendo um cómentário em uma linha
  /*
  fazendo outro comentário
  utilizando 2 linhas ou mais...
  */
};

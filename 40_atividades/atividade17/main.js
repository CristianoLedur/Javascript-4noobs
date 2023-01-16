function somar() {
  var n1 = document.getElementById("soma1").value;
  var n2 = document.getElementById("soma2").value;
  console.log(n1);
  console.log(n2);
  if (n1 == "") {
    n1 = 0;
  } else if (n2 == "") {
    n2= 0;
  }
  var soma = (parseInt(n1) + parseInt(n2));
  document.getElementById("resultado-soma").innerHTML = soma;
}

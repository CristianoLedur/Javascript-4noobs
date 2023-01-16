var list = ["Repetição ","Repetição ","Repetição ","Repetição ","Repetição "];
window.onload = function() {
  var div = document.getElementById("resultado");
  function escrever(item) {
    div.innerHTML += item;
  }
  list.forEach(escrever);
}
var list = [];

function executar() {
  var valor = document.getElementById("campo").value;
  list.push(valor);
  atualizarLista();
  document.getElementById("campo").value = "";
}
function atualizarLista() {
  var ul = document.getElementById("saida");
  ul.innerHTML = "";
  var i = 0;
  list.forEach(function(item) {
    var li = document.createElement("li");
    if(i % 2 === 0) {
      li.style.color = "blue";
    }
    i++
    li.textContent = item;
    ul.appendChild(li);
  });
}
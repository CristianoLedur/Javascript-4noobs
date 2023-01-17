var list = [];
function escrever() {
  var valor = document.getElementById("campo").value;
  list.push(valor);
  atualizarLista();
  document.getElementById("campo").value = "";
}
function atualizarLista() {
  var ul = document.getElementById("saida");
  ul.innerHTML = "";
  list.forEach(function(item, i) {
    var li = document.createElement('li');
    li.setAttribute("class", "liChild");
    li.setAttribute("data-index", i);
    li.textContent = item;
    ul.appendChild(li);
  });
}
function remover() {
  var parent = document.querySelector("#saida");
  parent.addEventListener("click", (event) => {
    if(event.target.matches(".liChild")) {
      var i = event.target.getAttribute("data-index");
      list.splice(i, 1);
      event.target.remove();
    }
    i++;
    atualizarLista();
  });
}


window.onload = function() {
  var div = document.getElementById("resultado");
  for(let i = 0; i < 11; i++) {
    for(let j = 0; j < 11; j++) {
      div.innerHTML += `${j} x ${i} = ${j * i}<br>`;
    }
  }
}
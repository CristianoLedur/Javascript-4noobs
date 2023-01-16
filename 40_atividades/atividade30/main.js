window.onload = function() {
  var div = document.getElementById("resultado");
  for(let i = 1; i < 21; i++) {
    if (i % 2 == 0) {
      div.innerHTML += i + " ";
    } else {
      continue;
    }
  }
}
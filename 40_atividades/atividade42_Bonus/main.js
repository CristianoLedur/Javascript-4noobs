window.onload = function() {
  var tempo = 1;
  var intervalId;
  var imagem = document.getElementById("img");
  var pos = 0;
  function starTimer() {
    intervalId = setInterval(decremento, 150);
  }

  function decremento() {
    imagem.style.left = pos + "px";
    if (tempo === 3) {
      tempo = 0;
    }
    if (tempo === 0) {
      document.getElementById("img").src = "https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-1.png";
    }
    if (tempo === 1) {
      document.getElementById("img").src = "https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-2.png";
    }
    if (tempo === 2) {
      document.getElementById("img").src = "https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-3.png";
    }
    console.log(tempo);
    tempo++;
    pos+=1
  }
  starTimer();
};
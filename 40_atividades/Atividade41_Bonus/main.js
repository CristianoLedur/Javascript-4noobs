window.onload = function() {
  var segundos = 5;
  var intervalID;

  function startTimer() {
    intervalID = setInterval(decremento, 1000);
  }

  function decremento() {
    segundos--;
    if (segundos === 0) {
      stopTimer();
      alert("Time's up!");
    } else {
      document.getElementById("time").innerHTML = segundos;
    }
  }

  function stopTimer() {
    clearInterval(intervalID);
  }

  startTimer();
}
 

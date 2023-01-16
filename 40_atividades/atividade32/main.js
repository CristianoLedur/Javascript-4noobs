window.onload = function() {
  var tags = document.getElementsByTagName('p');
  var result = document.getElementsByTagName('span');
  for(let i = 0; i < tags.length; i++) {
    if (tags[i].textContent.includes('Dota')) {
      result[i].innerHTML = " true";
    } else {
      result[i].innerHTML = " false";
    }
  }
}
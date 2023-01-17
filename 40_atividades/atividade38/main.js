var deuses = ['Aegir', 'Aud', 'Balder', 'Bragi', 'Búri', 'Dag', 'Dellingr'];
function create(item) {
  console.log(item);
  var tag = document.getElementById("nomes");
  tag.appendChild(document.createElement('li')).textContent = item;
}
window.onload = function() {
  deuses.forEach(create)
}
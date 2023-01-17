var deuses = ['Aegir', 'Aud', 'Balder'];
var text = "";
function retorno(item) {
  console.log(item);
  text += item + " ";
}
deuses.forEach(retorno);
alert(text);
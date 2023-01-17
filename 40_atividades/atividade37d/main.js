var deuses = ['Aegir', 'Aud', 'Balder'];
deuses.push('Loki', 'Odin', 'Frey');
var text = "";
function retorno(item) {
  console.log(item);
  text += item + " ";
}
deuses.forEach(retorno);
alert(text);
let he4rt = {
  comunidade: "Ativa",
  devs: "Incríveis"
};
console.log(he4rt); // {comunidade: "Ativa", devs: "Incríveis"}
// ADICIONANDO UMA NOVA KEY
he4rt.key = "adicionada";
console.log(he4rt); // {comunidade: "Ativa", devs: "Incríveis", key: "adicionada"}

// ADICIONANDO UMA NOVA KEY (sendo possivel dar um nome a chave)
he4rt["nome"] = "Vitor"

console.log(he4rt) // {comunidade: "Ativa", devs: "Incríveis", nome: "Vitor"}
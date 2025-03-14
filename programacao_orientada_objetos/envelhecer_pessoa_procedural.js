//Exemplo de Programação Procedural - Envelhecer pessoa
let pessoa = {
  nome: "Amanda",
  idade: 34,
};

function exibirNome(pessoa) {
  console.log(pessoa.nome);
}

function envelhecer(pessoa) {
  pessoa.idade++;
}

//Exemplo de uso da função acima
exibirNome(pessoa); //Exibe Amanda
envelhecer(pessoa);
console.log(pessoa.idade); //Exibe 35

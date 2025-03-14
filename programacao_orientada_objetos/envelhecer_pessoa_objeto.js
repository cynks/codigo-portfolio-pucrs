//Exemplo de Programação orientada a Objetos - Envelhecer pessoa
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  exibirNome() {
    console.log(this.nome);
  }

  envelhecer() {
    this.idade++;
  }
}

//criando Amanda, um objeto da classe Pessoa
let pessoa1 = new Pessoa('Amanda', 34);

//Usando métodos
pessoa1.exibirNome();
pessoa1.envelhecer();
console.log(pessoa1.idade); //exibe 35

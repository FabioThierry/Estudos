// Crie uma classe Veiculo com propriedades marca, modelo e ano, e um método acelerar() que exibe uma mensagem acelerando o veículo.

class Veiculo {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  acelerar() {
    console.log(`O ${this.modelo} deu uma acelerada das brabas!`);
  }
}

let novoCarro = new Veiculo("Renault", "Clio", 2014);

console.log(novoCarro.marca);
console.log(novoCarro.modelo);
console.log(novoCarro.ano);
novoCarro.acelerar();

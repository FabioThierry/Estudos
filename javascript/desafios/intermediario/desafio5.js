// Crie uma classe Animal com propriedades nome e tipo, e um método emitirSom() que exibe o som do animal no console.

class Animal {
  nome = "Brit";
  tipo = "Cabra";

  emitirSom() {
    console.log("beeeeerrrr");
  }
}

let pindola = new Animal();
console.log(pindola.nome);
console.log(pindola.tipo);
pindola.emitirSom();

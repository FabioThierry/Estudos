// Crie uma função que receba um número como parâmetro e retorne true se ele for par e false se for ímpar.

let verificarImparOuPar = function (numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(verificarImparOuPar(50));
console.log(verificarImparOuPar(15));
console.log(verificarImparOuPar());

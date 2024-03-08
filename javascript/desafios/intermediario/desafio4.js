// Crie uma função que receba um número como parâmetro e retorne true se ele for par e menor que 10, e false caso contrário.

let parMiorDez = (numero) => {
  if (numero < 10 && numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(parMiorDez(2));
console.log(parMiorDez(55));

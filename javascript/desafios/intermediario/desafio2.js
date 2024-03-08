// Crie uma função que receba um array de números como parâmetro e retorne o maior número do array.

function maiorNumeroArray(arr) {
  let numeroMaximo = Math.max.apply(NaN, arr);
  console.log(numeroMaximo);
}
maiorNumeroArray([5, 12, 8, 130, 44, 30, 31231, 13456, 101144]);

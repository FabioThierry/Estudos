// Crie uma função que receba um array de números como parâmetro e retorne a média deles.

(function (arr) {
  let total = 0;
  let i = 0;
  let media;
  for (i = 0; i < arr.length; i++) total += arr[i];
  console.log((media = total / arr.length));
})([11, 13, 55, 67, 77, 84, 294, 224, 24, 22]);

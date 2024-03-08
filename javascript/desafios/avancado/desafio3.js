// Crie uma função que receba um número como parâmetro e retorne o fatorial desse número.

(function (numero) {
  var produto = 1;
  while (numero > 1) {
    produto *= numero;
    numero--;
  }
  console.log(produto);
  return produto;
})(4);

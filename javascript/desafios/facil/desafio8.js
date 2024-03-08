// Crie uma função que simule uma requisição assíncrona e retorne uma promessa que é resolvida após 1 segundo.
// Promisse;
function requisicaoPromise() {
  return new Promise((resolvido, rejeitado) => {
    setTimeout(() => {
      const sucesso = true;
      if (sucesso) {
        resolvido("funcionou");
      } else {
        rejeitado("nao funcionou");
      }
    }, 1000);
  });
}

requisicaoPromise()
  .then((resultado) => console.log(resultado))
  .catch((erro) => console.error(erro));

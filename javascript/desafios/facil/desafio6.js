// Crie uma função que receba um callback como parâmetro e o invoque após 2 segundo.

let esperar = (callback) => {
  setTimeout(callback, 2000);
};
function logCallbk() {
  console.log("esse texto esperou 2 segundo para ser mostrado");
}
esperar(logCallbk);

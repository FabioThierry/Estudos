// Crie uma função ordenarArray que recebe um array e um callback de comparação, e retorna o array ordenado com base na função de comparação.
let array = [5, 3, 2, 1];
function callbackComparador(arr) {
  console.log(
    `Esse é o array desordenado ${arr} e esse é o array ordenado: ${arr.sort()}`
  );
}

console.log(
  (function (arr, callback) {
    callback(arr);
    return arr.sort();
  })(array, callbackComparador)
);

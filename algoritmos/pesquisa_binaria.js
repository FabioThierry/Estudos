function pesquisa_binaria(array, elemento) {
  let baixo = 0; // primeiro

  let alto = array.length - 1; // último

  while (baixo <= alto) {
    console.log("baixo: " + baixo + " alto: " + alto);
    const meio = Math.floor((baixo + alto) / 2); //  Math.floor arredonda para baixo

    const chute = array[meio]; // elemento
    console.log(
      "+++ esse é elemento do meio: " +
        meio +
        " que corresponde ao chute: " +
        chute
    );

    if (chute === elemento) {
      console.log("valor encontrado, achou");
      return meio; // elemento encontrado no meio da busca binária
    } else if (chute > elemento) {
      console.log("o chute foi maior que o elemento");
      alto = meio - 1; // último = meio - 1
    } else {
      console.log("o chute foi menor que o elemento");
      // elemento < chute
      baixo = meio + 1; // primeiro = meio + 1
    }
  }

  return null; // elemento não encontrado
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(pesquisa_binaria(array, 3));

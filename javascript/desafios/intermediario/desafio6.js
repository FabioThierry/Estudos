// Crie uma função buscarDados que simula uma requisição assíncrona e recebe um callback como parâmetro para retornar os dados.

function buscarDados(callback) {
  setTimeout(() => {
    const dados = {
      nome: "Berg",
      idade: 50,
    };

    callback(dados);
  }, 2000);
}

function tratarDados(dados) {
  console.log(`Nome: ${dados.nome}, Idade: ${dados.idade}`);
}

buscarDados(tratarDados);

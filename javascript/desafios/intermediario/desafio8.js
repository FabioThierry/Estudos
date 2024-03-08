//Crie uma função buscarUsuario que simula uma requisição assíncrona para buscar um usuário pelo ID e retorne uma promessa com os dados do usuário.

let idDeBusca = 1;

let buscarUsuario = () => {
  return new Promise((resolve, reject) => {
    const dadosUsuario = {
      id: 1,
      nome: "Berg",
      idade: 50,
    };
    if (dadosUsuario.id === idDeBusca) {
      resolve(`O usuário ${dadosUsuario.nome} foi encontrado`);
    } else reject("Usuário não encontrado!");
  });
};

buscarUsuario()
  .then((resultado) => console.log(resultado))
  .catch((erro) => console.error(erro));

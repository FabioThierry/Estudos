import * as types from "../types";

const initialState = {
  botaoClicado: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log("Estou fazendo o sucesso de BOTAO_CLICADO_SUCCESS");
      const newState = {
        ...state,
      };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    case types.BOTAO_CLICADO_FAILURE: {
      console.log("Estou fazendo o erro de BOTAO_CLICADO_FAILURE");
      return state;
    }

    case types.BOTAO_CLICADO_REQUEST: {
      console.log("Estou fazando a requisição de BOTAO_CLICADO_REQUEST");
      return state;
    }
    default:
      return state;
  }
}

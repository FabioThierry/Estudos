import { call, put, takeLatest, all } from "redux-saga/effects";
import { toast } from "react-toastify";

import * as actions from "./actions";
import * as types from "../types";

const requisicao = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 600);
  });

function* exempleRequest() {
  try {
    yield call(requisicao);
    yield put(actions.clicarBotaoSuccess());
  } catch (error) {
    toast.error("deu erro");
    yield put(actions.clicarBotaoFailure());
  }
}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exempleRequest)]);

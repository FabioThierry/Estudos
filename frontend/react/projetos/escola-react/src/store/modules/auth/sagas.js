import { call, put, takeLatest, all } from "redux-saga/effects";
import { toast } from "react-toastify";

import * as actions from "./actions";
import * as types from "../types";
import axios from "../../../services/axios";
import history from "../../../services/history";
import get from "lodash/get";

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, "/tokens", payload);
    yield put(actions.loginSuccess({ ...response.data }));
    toast.success("Login realizado com sucesso");

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    history.push(payload.prevPath);
  } catch (e) {
    toast.error("Usuario ou senha invalido");
    yield put(actions.loginFailure());
  }
}

function onCheckToken({ payload }) {
  const token = get(payload, "auth.token", "");
  if (!token) {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

function* registerRequest({ payload }) {
  const { id, nome, email, password: password } = payload;

  try {
    if (id) {
      yield call(axios.put, "/users", {
        nome,
        email,
        password: password || undefined,
      });
      toast.success("Usuário alterado com sucesso");
      yield put(actions.registerUpdatedSuccess({ nome, email, password }));
    } else {
      yield call(axios.post, "/users", {
        nome,
        email,
        password,
      });
      toast.success("Usuário criado com sucesso");
      yield put(actions.registerCreatedSuccess({ nome, email, password }));

      history.push("/login");
    }
  } catch (e) {
    const errors = get(e, "response.data.errors", []);
    const status = get(e, "response.status", 0);

    if (status === 401) {
      toast.error("voce precisa fazer login");
      yield put(actions.loginFailure());
      return history.push("/login");
    } else {
      errors.map((error) => toast.error(error));
    }
    yield put(actions.registerFailure());
  }
}
export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, onCheckToken),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);

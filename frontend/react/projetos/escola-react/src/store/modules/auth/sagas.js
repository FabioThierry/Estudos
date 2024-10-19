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
export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, onCheckToken),
]);

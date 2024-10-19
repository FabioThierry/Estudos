import React from "react";
import { Container } from "../../styles/GlobalStyles";
import { Form } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { get } from "lodash";

import { toast } from "react-toastify";
import isEmail from "validator/lib/isEmail";
import * as actions from "../../store/modules/auth/actions";
import Loading from "../../components/Loading";

export default function Login(props) {
  const dispatch = useDispatch();

  const prevPath = get(props, "location.state.prevPath", "/");

  const isLoading = useSelector((state) => state.auth.isLoading);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formErros = false;

    if (!isEmail(email)) {
      formErros = true;
      toast.error("Email Invalido");
    }
    if (password.length < 6 || password.length > 50) {
      formErros = true;
      toast.error("Senha Invalida");
    }
    if (formErros) return;

    dispatch(actions.loginRequest({ email, password, prevPath }));
  };
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Login</h1>
      <Form>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Sua Senha"
        />

        <button type="submit " onClick={handleSubmit}>
          Entrar
        </button>
      </Form>
    </Container>
  );
}

import React from "react";
import { Container } from "../../styles/GlobalStyles";
import { Form } from "./styled";
import { useDispatch } from "react-redux";

import { toast } from "react-toastify";
import isEmail from "validator/lib/isEmail";
import * as actions from "../../store/modules/auth/actions";

export default function Login() {
  const dispatch = useDispatch();

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

    dispatch(actions.loginRequest({ email, password }));

    try {
      const response = await axios.post("/sessions", { email, password });
      dispatch(actions.loginSuccess(response.data));
      toast.success("Login realizado com sucesso");
      history.push("/");
    } catch (e) {
      const errors = get(e, "response.data.errors", []);
      errors.map((error) => toast.error(error));
    }
  };
  return (
    <Container>
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

import React from "react";
import { Container } from "../../styles/GlobalStyles";
import { Form } from "./styled";
import { toast } from "react-toastify";
import isEmail from "validator/lib/isEmail";
import axios from "../../services/axios";
import get from "lodash/get";
import history from "../../services/history";

export default function Register() {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    let formErros = false;

    if (nome.length < 3 || nome.length > 255) {
      formErros = true;
      toast.error("O nome deve ter entre 3 e 255 caracteres");
    }
    if (!isEmail(email)) {
      formErros = true;
      toast.error("O email informado não é válido");
    }
    if (password.length < 6 || password.length > 50) {
      formErros = true;
      toast.error("A senha deve ter entre 6 e 50 caracteres");
    }
    if (formErros) return;

    try {
      await axios.post("/users/", { nome, email, password });
      toast.success("Usuário criado com sucesso");
      history.push("/login");
    } catch (e) {
      const errors = get(e, "response.data.errors", []);
      console.log(errors);
      errors.map((error) => toast.error(error));
    }
  }
  return (
    <Container>
      <h1>Crie sua conta</h1>
      <Form>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu nome"
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
          />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
          />
        </label>

        <button type="submit" onClick={handleSubmit}>
          Cadastrar
        </button>
      </Form>
    </Container>
  );
}

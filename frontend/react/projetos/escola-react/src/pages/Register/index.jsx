import React from "react";
import { Container } from "../../styles/GlobalStyles";
import { Form } from "./styled";
import { toast } from "react-toastify";
import isEmail from "validator/lib/isEmail";
import * as actions from "../../store/modules/auth/actions";
import Loading from "../../components/Loading";

import { useSelector, useDispatch } from "react-redux";

export default function Register() {
  const dispatch = useDispatch();

  const id = useSelector((state) => state.auth.user.id);
  const nomeStored = useSelector((state) => state.auth.user.nome);
  const emailStored = useSelector((state) => state.auth.user.email);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  React.useEffect(() => {
    if (!id) return;

    setNome(nomeStored);
    setEmail(emailStored);
  }, [id, nomeStored, emailStored]);

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
    if (!id && (password.length < 6 || password.length > 50)) {
      formErros = true;
      toast.error("A senha deve ter entre 6 e 50 caracteres");
    }
    if (formErros) return;

    dispatch(actions.registerRequest({ nome, email, password, id }));
  }
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>{id ? "Atualize seus dados" : "Crie sua conta"}</h1>
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
          {id ? "Atualizar" : "Cadastrar"}
        </button>
      </Form>
    </Container>
  );
}

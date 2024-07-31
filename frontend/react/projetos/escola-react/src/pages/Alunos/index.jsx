import { Container } from "../../styles/GlobalStyles";

import axios from "../../services/axios";
import React from "react";

export default function Alunos() {
  React.useEffect(() => {
    async function getAlunos() {
      const response = await axios.get("/alunos");
      console.log(response.data);
    }

    getAlunos();
  }, []);

  return (
    <Container>
      <h1>Alunos</h1>
    </Container>
  );
}

import { Title } from "./styled";

import { Container } from "../../styles/GlobalStyles";
import React from "react";

// import axios from "../../services/axios";
export default function Login() {
  React.useEffect(() => {
    console.log("oi");
    // async function getData() {
    //   const response = await axios.get("/alunos");
    //   const { data } = response;
    //   console.log(data);
    // }

    // getData();
  }, []);
  return (
    <>
      <Container>
        <Title $isred="true">
          Loginqeq <br />
        </Title>
        <a href="adad">adad</a>
        <button>Login</button>
      </Container>
    </>
  );
}

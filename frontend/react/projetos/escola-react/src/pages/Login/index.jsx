import { Title } from "./styled";
import { useDispatch } from "react-redux";

import { Container } from "../../styles/GlobalStyles";
import * as exempleActions from "../../store/modules/exemple/actions";

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exempleActions.clicarBotaoRequest());
  }
  return (
    <>
      <Container>
        <Title $isred="true">
          Loginqeq <br />
        </Title>
        <a href="adad">adad</a>
        <button onClick={handleClick} type="button">
          Login
        </button>
      </Container>
    </>
  );
}

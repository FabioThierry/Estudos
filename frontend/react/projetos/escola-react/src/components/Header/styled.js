import styled from "styled-components";
import { defColor } from "../../config/colors";

export const Nav = styled.nav`
  background: ${defColor.tertiary};
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${defColor.secondary};

  a {
    color: ${defColor.secondary};
    margin: 0 10px 0;
    font-weight: bold;
  }
`;

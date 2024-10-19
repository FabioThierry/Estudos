import styled from "styled-components";
import * as colors from "../../config/colors";

export const Form = styled.p`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  input {
    height: 40px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 0 10px;
    border-radius: 4px;

    &:focus {
      border: 1px solid ${colors.primary};
    }
  }

  button {
    cursor: pointer;
    background: #51513d;
    height: 40px;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
  }
`;

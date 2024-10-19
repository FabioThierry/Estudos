import styled from "styled-components";
import * as colors from "../../config/colors";

export const Form = styled.p`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  input {
    height: 40px;
    margin-top: 10px;
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
    margin-top: 20px;
    border: 0;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    transition: background-color 0.2s;
    &:hover {
      background: ${colors.primary};
    }
  }
`;

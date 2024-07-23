import styled from "styled-components";
import { defColor } from "../../config/colors";

export const Title = styled.h1`
  color: ${(props) => (props.$isred ? "red" : "blue")};
  font-size: 2rem;
  font-weight: bold;

  margin-bottom: 1rem;
  text-align: center;
`;

export const Small = styled.small`
  font-size: 1rem;
  color: #333;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${defColor.primary};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-family: inherit;
`;

import { styled, createGlobalStyle } from "styled-components";
import { defColor } from "../config/colors";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background-color: ${defColor.primary};
    font-family: 'Roboto', sans-serif;
  }
  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background-color: ${defColor.secondary};
    border: 0;
    padding: 10px 20px;
    border-radius: 4px;
    color: ${defColor.primary};
    font-weight: bold;
    font-size: 14px;
    transition: background-color 0.2s;
  }

  a{
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background-color: ${defColor.success};
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background-color: ${defColor.error};
  }
  `;

export const Container = styled.section`
  max-width: 480px;
  background: ${defColor.secondary};
  padding: 20px;
  border-radius: 4px;
  margin: 30px auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

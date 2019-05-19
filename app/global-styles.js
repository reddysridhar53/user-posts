import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    font-size: 10px;
    font-family: 'Roboto', sans-serif;
  }
  #app {
    background-color: #f5f7f9;
    min-height: 100%;
    min-width: 100%;
  }
  .modal-overlay{
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .modal {
    position: absolute;
    width: 500px;
    height: 400px;
    left: 50%;
    bottom: 40px;
    background: #fff;
    top: 50%;
    border: none;
    outline: none;
    border-radius: 5px;
    transform: translate(-50%, -50%);
  }
`;

export default GlobalStyle;

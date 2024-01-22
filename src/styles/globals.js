import { css } from '@emotion/react'

export const globals = css`
  * {
    box-sizing: border-box;
    outline: 0;
    padding: 0;
    margin: 0;
    &::before,
    &::after {
      box-sizing: border-box;
    }
  }
  :root {
    /* Texts */
    --text-primary: #000;
    --text-black: #000;
    --text-white: #FFF;
    --text-error: #E74C3C;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  #root {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  body {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
  }
  
  button {
    border: none;
    &:hover {
      cursor: pointer;
    }
  }

  a {
    &:hover {
      cursor: pointer;
    }
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  section {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
`;

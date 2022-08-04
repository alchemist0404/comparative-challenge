import { createGlobalStyle, css } from "styled-components";

export const globalStyle = css`
    html,
    body {
        margin: 0;
        background-color: #1c162e;
    }

    html {
        font-family: "Roboto","Helvetica","Arial",sans-serif;
        -moz-osx-font-smoothing: grayscale;
        letter-spacing: -0.06em !important;
        font-size: 16px;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }

    *,
    *::before,
    *::after {
        font-family: "Roboto","Helvetica","Arial",sans-serif;
        box-sizing: border-box;
        margin: 0;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type="number"] {
        -moz-appearance: textfield;
    }
`;

export const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`;

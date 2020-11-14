import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: Poppins;
        font-style: normal;
        font-weight: 400;
        src: url("/fonts/Poppins-Regular.ttf") format("truetype");
    }

    :root {
        --blue: #00a6d1;
        --black: #383838;
        --white: #FFFFFF;
        --secblue: #18dabb;
        --dark-blue: #003459;
        --gray: #2c2929;

    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100%;
    }

    body {
        font-family: "Poppins", "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        background-color: var(----white);

        ::-webkit-scrollbar-track {
            background-color: var(--white);
        }
        ::-webkit-scrollbar {
            width: 8px;
            background: none;
        }
        ::-webkit-scrollbar-thumb {
            background: var(--blue);
            border-radius: 3px;
        }
    }

    header,
    body,
    input,
    button {
        font-family: "Poppins", Arial, Helvetica, sans-serif;
    }

    button,
    input {
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        border: none;
    }
`;

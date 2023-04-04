import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    width: 100vw;
    height: 100vh;


    * {
        margin: 0;
        padding: 0;

    }
    header {
        margin: 20px;

    }
    body {
        background-image: linear-gradient(90deg, #002F52 35%, #326589);
    }

`;
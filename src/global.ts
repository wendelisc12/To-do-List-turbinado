import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Josefin Sans", sans-serif;
    }

    body{
        background-color: ${(props)=> props.theme.backgroundPrincipal};
    }
`

export default Global
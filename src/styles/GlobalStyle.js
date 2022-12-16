import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        border: 0;
        font-family: Arial, Helvetica, sans-serif;
        outline: none;  
        
    }
    a{
        text-decoration: none;
        color: white;
    }
    :root{
        --primary:#000;
        --secondary:#123a85;
    }
    body{
        background: linear-gradient(180deg, var(--primary) 0%, var(--secondary) 100%);
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
    }

    html{
        font-size: 62.5%;
        scroll-behavior:smooth;
    }
    img{
        max-width: 100%;
        display: block;
   }

`
export default GlobalStyle;



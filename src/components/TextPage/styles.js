import styled from "styled-components";

export const TextoPageU = styled.u`


& {
    text-transform: uppercase;
            color: white;
            text-decoration: none;
            position: relative;
        }
        &::after{
        position: absolute;
            content: '';
            border-radius:15px ;
            height: 3px;
            width: 100%;
            left: 0;
            bottom:-3px;
            background-color:var(--primary) ;

        }
        

`
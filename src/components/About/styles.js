import styled from "styled-components";

export const ContainerSobre = styled.section`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    overflow: hidden ;
   
    
`

export const ContentSobre = styled.div`
    margin: 0 auto;
    max-width: 1220px;
    padding-left: 2.8rem;
    padding-top: 5rem;

    @media (max-width:1220px){
            padding-left: 6rem;

        }
    @media (max-width:670px){
            flex-direction: column;
            padding: 10px 0px 0px 64px ;
        }
   
    & p{
        color: white;
        font-size: 22px;
        & a{
            color:blue;
            &:hover{text-decoration:underline white;}
        }
    }


`
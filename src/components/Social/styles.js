import styled from "styled-components";

export const ContainerSocial = styled.aside`
    position: fixed;
    width: 32px;
   
    background-color: #2a2c30;
    border-radius:0px 8px 8px 0px; 
    top:calc(100% -150px);
    z-index: 2;

`
export const Sociais = styled.nav`
    padding-top: 0.8rem;
    position: relative;
    left: -1rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    & li:first-child{
        padding-top: 0;
    }
    & li {
        padding: 6px;
    }
    & li:hover{
    transform: scale(1.3);

    }
  
    

`
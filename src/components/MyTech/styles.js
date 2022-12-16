import styled from "styled-components";

export const CardTech = styled.div`
  
    
    display: flex;
    transform: scale(1.000001);
    flex-direction:column;
    justify-content: center;
    align-items: center;
    min-width: 230px;
    min-height: 216px;
    transition: all 0.2s;
    position: relative;
    overflow: hidden;
   
  &::before{
    content: '';
    position: absolute;
    width: 150px;
    height: 150%;
    border-radius: 10px;
    background: ${({ color }) => `linear-gradient(180deg ,${color} 48% ,rgba(0,0,0,0) 11%)`};
    animation: animateColor 6s linear infinite;
  }
  &::after{
    content: '';
    position: absolute;
    border-radius: 10px;
    background-color:black;
    border-radius: 10px;
    inset: 2px;
  
  }

  @keyframes animateColor {
    0%{ transform:rotate(0deg)}
    100%{ transform:rotate(360deg)}
  }



    &:hover{
        transform: scale(1.1);

    }
    
   
    & img{
       
        z-index: 1;
        max-width: 210px;
        margin-top:10px;
        padding: 0px 20px ;
        @media (max-width:670px){
            width: 100%;
            padding: 0px;

        }

    }
   
    & h3{
    z-index: 1;
    color: white;
    font-weight: 600;
    text-align: center;
    }
   
    
  

`
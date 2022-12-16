import styled from "styled-components";

export const ContainerMyProject = styled.div`



        

            min-width: 250px;
            height: 250px;
            margin-right: 40px;
            background-color: gray;
            border-radius: 8px;
            position: relative;
            @media(max-width: 670px) {

                width: 200px;
                height: 200px;


            }
            background-image: ${({ img }) =>  `url( ${img})` };
            background-size:cover;
            background-repeat: no-repeat;
            background-position: center;
          
            & img{
                width: 100%;
                height: 100%;
                
            }

& div {

   
    display:flex;
    width: 100%;
    background: linear-gradient(360deg, var(--primary) 0%, var(--secondary) 100%);
    
    justify-content: center;
    position: absolute;
    top: 85%;
    padding: 10px;


& button{
    background-color: transparent;
    margin-left:10px ;
    color: white;
    font-size: 12px;
    transition: all .5s ease;
    font-weight: 600;
    

    &:hover{    
    transform: scale(1.1);

    }

}


}


`
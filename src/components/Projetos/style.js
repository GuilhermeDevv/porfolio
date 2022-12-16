import styled from "styled-components";

export const ContainerProjetos = styled.section`

width: 100vw;
min-height: 100vh;
height: 100%;
overflow: hidden;

`

export const ContentProjetos = styled.div`

    max-width: 1210px;
    margin: 0 auto;
    height: 100%;
    padding-left: 2.8rem;
    padding-top: 5rem;

    @media (max-width:1220px){
            padding-left: 6rem;

        }
    @media (max-width:670px){
            padding: 10px 0px 0px 64px ;
        }

       
      

    & h4{
            color:white;
            margin-top:10px;
            opacity: 0.5;

            }


`

export const ContentMyProject = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
& div{
    margin-bottom: 10px;
    position: relative;
    overflow: hidden;
    text-align: center;
    & span{
        display: block;
        width: 100%;
        background-color: black;
        color: white;
        font-size: 22px;
        text-transform: uppercase;
        font-weight: bolder;
        
    }
   
}



`
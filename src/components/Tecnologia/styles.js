import styled from "styled-components";


export const ContainerTecnologia = styled.section`
  overflow: hidden ;
  width: 100%;
  height: 100%;
  min-height: 100vh;

`

export const ContentTecnologia = styled.div`
  padding-top: 5rem;
  max-width: 1220px;
  margin: 0 auto;
  padding-left:2.8rem;
 
 

    @media (max-width:1220px){
                padding-left: 6rem;

    }
    @media (max-width:670px){
                
                padding: 30px 0px 0px 64px ;
    }
    


`
export const Techh = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    @media (max-width:670px){
      align-items: baseline;
    }
    & div{
      margin: 10px;
      border-radius: 10px;
    }




`
import styled from "styled-components";

export const ContainerContato = styled.section`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    overflow:hidden;

    .erro{
        border-bottom: solid 1px red !important;
    }

`
export const ContentContato = styled.div`
    margin: 0 auto;
    max-width: 1220px;
    height: 100vh;
    padding-left: 2.8rem;
    padding-top: 5rem;
  

    @media (max-width:1220px){
            padding-left: 6rem;

        }
    @media (max-width:670px){
            flex-direction: column;
            padding: 10px 0px 0px 64px ;
        }

    & div {
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        
        max-width: 650px;
        width:100%;
        

        @media(max-width:670px){
        padding-right: 2rem;
        }



        
}

    @media (max-width:1220px){
                    padding-left: 6rem;

    }
    @media (max-width:670px){
                    padding: 10px 0px 0px 64px;
    }

`
export const Form = styled.form`
   background-color: #121216;
   border:solid 1px #121216;
   border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    width: 100%;
    height: 80%;
    margin-top: 15%;
    

   
    
    & *{
        border-radius:10px;
        font-size: 15px;
        
    }
    



  & h5{
    color:white;
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 35px;
    
  }


    & textarea{
        color: white;
        background-color: #0c0b0e;
        border:solid 1px #0c0b0e;
        width:50% ;
        padding-left: 1rem;
        margin-top: 2rem;
    
        @media(max-width:670px){
                width: 80%;
        }
    }
  

    
    & input[type='text']{ 
        width: 50%;
        background-color: #0c0b0e;
        border:solid 1px #0c0b0e;
        padding: 1rem;
        color: white;
        @media(max-width:670px){
            width: 80%;
        }
    }
    
      
    
    & input[type=submit]{ 
        width: 20rem;
        height: 30px;
        color:white;
        font-size: 15px;
        font-weight: bold;
        text-transform: uppercase;
        margin-top: 10px;
        background-color: #0c0b0e;
        border:solid 1px #0c0b0e;
    margin-bottom:5rem ;
       

      

        &:hover{ 
            transform: scale(1.05);
        }
    }
    & p{ 
        
        color: white;
        font-weight: 600;
        text-transform: uppercase;
    }


`
export const MsgEmail = styled.div`
    color: white;
    width: max-content;
    padding: 15px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 10px;
    position: relative;
    left: 0;
    top: -100px;
    background-color: var(--primary);
    border: solid 1px var(--secondary);
    position: relative;
    & p{ 
        margin-top: 5px;
        font-weight: bolder;
    }
    & span{
        position: absolute;
        right: 0;
        top: -3px;
        font-size: 15px;
        font-weight: 800;
        cursor: pointer;
    }
    animation: keyframeMsg 1s forwards;
    @keyframes keyframeMsg {
        from{ 

        left: -400px;

        }
        to{
            left: 0px;
        }

    }

`

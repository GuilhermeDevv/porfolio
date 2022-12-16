import styled from "styled-components";

export const ContainerSection = styled.section`
    width: 100%;
    display: block;
    height: 100vh;
  
    overflow: hidden ;


`


export const ContentInfoMy = styled.main`
    max-width: 1210px;
    display: flex;

  
    
    padding-left:2.8rem;
    justify-content: space-around;
    padding-top:8.5rem;
    color: white;
    margin: 0 auto;
   
        @media (max-width:1220px){
            padding-left: 6rem;

        }
    @media (max-width:670px){
            flex-direction: column;
            padding: 10px 0px 0px 64px ;
        }
   
`
export const MyPerson = styled.article`

    & h1{         
      
        background: -webkit-linear-gradient( var(--secondary),var(--primary));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 800;
        text-transform: uppercase;
         font-size: clamp(30px,50%,64px);

            @media (max-width:670px){
 
                font-size: 32px
            };
        };
     
            & p{
    
                color:white ;
                filter: brightness(40%);
                margin-top:15px ;
                font-weight: 600;
                font-size:20px ;

            }
            & p::after{
                color: white;
                content: '|';
                margin-left: 5px;
                opacity: 1;
                animation:piscar 1s infinite;
            }
            @keyframes piscar {
                
                0%{
                    opacity: 2;
                }
                50%{
                    opacity: 0.1;
                }
                100%{opacity:2;}



            }
           
            & span{

                text-decoration: underline;
            }
      
        
`
export const ButtonCv = styled.div`
    display: inline-block;
    margin: 10rem 0px;
    @media ( max-width:670px)
    {
        margin: 3rem 0px;

    }    
 
    

  

    & a {
        background-image: linear-gradient(to right, #314755 0%, #26a0da  51%, #314755  100%);
        border-radius: 8px;
        padding: 10px 20px;
        color:white;
        font-size: 16px;
        position: relative;
     
   
    &:hover{
     filter: brightness(50%);
    }
}

`
export const MyImg = styled.div`

    min-width: 250px;
    height: 250px;
    margin-right:40px ;
    background-color: gray;
    border-radius: 8px;
    
    @media (max-width:670px){

        width: 200px;
        height: 200px;


    }


`
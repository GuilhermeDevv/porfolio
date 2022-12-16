import styled from "styled-components";

export const ContainerHeader = styled.header`
    overflow: hidden ;
    color: #fff;
    background-color: transparent;
    display: flex;
    justify-content:space-between;
    align-items: center;
 
`
export const ContentHeader = styled.main`  
    width: 100%;
    height:90px;
    position: fixed;
    z-index: 1;
    max-width: 1210px;
    margin:0 auto;
    padding-right:2rem;
  
    height: 100px;

    
`
export const LogoHeader = styled.img`
    width: 140px;
    

`
export const NavHeader = styled.nav`
    float: right;
    padding-top: 2.5rem;

    &>ul{
            display: flex;
            gap: 0.8rem;
            cursor: pointer;
            
            &> li a{
                font-family: Helvetica, sans-serif; 
                font-size: 1.5rem;
                text-transform: uppercase;
                font-weight: 600;
                position: relative;
                
                &:hover{
                    transform:scale(1.05);
                    color: white;
                }
                
                &::after{
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: 0;
                    height: 3px;
                    width:0%;
                    transition: all 0.6s;
                    background-color: var(--secondary);;
                }
                &:hover::after{
                    width: 100%;
                    
                }

            }
            @media (max-width:670px) {
                display: none;
            }
            
        }
`
export const MenuHeader = styled.div`
    display: none;
    padding-top: 2.5rem;
   
    @media (max-width:670px) {
        display: block;
        float: right;

        & div{
            position: relative;
            z-index: 1;
        }
    }
   

`
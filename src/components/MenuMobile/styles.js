import styled from "styled-components";

export const ContentMenuMobile = styled.main`

    position: fixed;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
  
    justify-content: center;
  

    background: rgba( 255, 255, 255, 0.05 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px );
  
`
export const ListMobile = styled.nav`
    
    
    position: fixed;
    top: 150px;
  
    cursor: pointer;
       & li{
        text-align: center;
        position: relative;
        color:white;
        font-size: 36px;
        font-weight: 600;
       }
       & li:hover{
        transform:scale(1.05);
       }
       & li::after{
        content: '';
        position: absolute;
        transition: 150ms;
        height: 3px;
        width: 0;
        background-color: var(--primary);
        left: 0;
        bottom: 0;
       }
       & li:hover::after{
         height: 3px;
         width: 100%;
    }

      

`
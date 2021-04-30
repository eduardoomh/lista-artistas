import styled from 'styled-components';

export const MainContainerStyle = styled.main`
    position: relative;
`;

export const IconStyle = styled.a`
    display: none;
    position: absolute;
    right: 20px;

    @media (min-width: 1000px){
        display: block;
        color: inherit;
    }
`;

export const DivContainer = styled.div`

    @media (min-width: 600px){
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
  

    @media (min-width: 1000px){
        flex-direction: row-reverse;
        justify-content: center;
    }
  
`;
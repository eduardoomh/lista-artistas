import styled from 'styled-components';

export const DivMainContainer = styled.div`
    margin-bottom: 6rem;

    @media (min-width: 500px){
        width: 400px;
        margin: auto;
        margin-bottom: 6rem;
    }
`;

export const DivContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p{
        text-align: center;
        font-size: 1.2rem;
        font-weight: bold;
    }
    
    a{
        color: inherit;
    }
`;

export const UlContainerStyle = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    li{
        text-align: center;
        font-size: 1.3rem;
        font-weight: bold;
    }
`;
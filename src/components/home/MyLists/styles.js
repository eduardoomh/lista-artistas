import styled from 'styled-components';

export const DivMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 1rem;

    @media (min-width: 600px){
        padding: 0;
    }
`;

export const DivStyle = styled.div`
    max-width: 1300px;
    margin: auto;

    @media (min-width: 600px){
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;
        width: 100vw;
    }

    @media (min-width: 1000px){
        flex-wrap: nowrap;
        width: 1000px;
    }

    @media (min-width: 1100px){
        width: 1100px;
    }

    @media (min-width: 1200px){
        width: 1199px;
    }

`;


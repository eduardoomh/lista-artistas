import styled from 'styled-components';

export const DivMainContainer = styled.div`
    padding: 1rem;
    padding-bottom: 1rem;

    @media (min-width: 1000px){
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin-left: 1rem;
    }

    @media (min-width: 1100px){
        margin-left: 2rem;
    }
`;

export const TextStyle = styled.p`
    color: var(--sixth);
    font-size: 2rem;
    margin: 1rem;

    @media (min-width: 1000px){
        margin: 0 2rem 0 0;
    }
`;

export const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media (min-width: 1000px){
        flex-direction: row;
        justify-content: flex-start;
        padding-left: 1rem;
        
    }
`;
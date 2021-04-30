import styled from 'styled-components';

export const DivContainer = styled.div`
    max-width: 100vw;
    overflow-x: hidden;
`;

export const PStyle = styled.p`
    text-align:center;
    color: white;
    font-size: 1.8rem;
    font-weight: semibold;
    margin-top: 4rem;

    a{
        color: inherit;
    }

    @media (min-width: 600px){
        margin-top: 0;
    }
`;


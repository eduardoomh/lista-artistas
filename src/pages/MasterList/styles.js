import styled from 'styled-components';

export const MainContainerStyle = styled.main`
    min-height: 100vh;

    @media (min-width: 1000px){
        .title-word-break{
            display: none;
        }
    }

`;

export const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
import styled from 'styled-components';

export const ArticleStyle = styled.article`
    border-radius: 6px;
    background-color: var(--third);
    margin: 4.5rem .5rem;

    @media (min-width: 600px){
        width: 20rem;
    }
`;

export const AvailableSectionStyle  = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
    border-radius: 6px 6px 0 0;
    background-color: ${props => props.available ? 'var(--seventh)' : 'var(--fifth)'} ;
    color: white;
    font-size: 1.3rem;
`;

export const ImagesContainerStyle = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 7rem;

    img{
        border-radius: 50%;

        &:first-child{
            margin-right: -2rem;
            z-index: 4;
        }

        &:nth-child(2){
            z-index: 5;
        }

        &:nth-child(3){
            margin-left: -2rem;
            z-index: 6;
        }
    }
`;

export const InfoSectionStyle = styled.section`
    padding: 0 2rem;
    min-height: 18rem;
`;

export const ButtonSectionStyle = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6rem;
`;
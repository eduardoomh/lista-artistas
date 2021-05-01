import styled from 'styled-components';

export const UlStyle = styled.ul`
    margin: 1rem 1rem 6rem;
`;

export const LiStyle = styled.li`
    display: grid;
    grid-template-columns: 1rem 4rem 1fr;
    grid-template-rows: 2.5rem 1.5rem 2rem;
    height: 6rem;
    border-radius: 6px;
    margin-bottom: 2rem;
    background-color: var(--fourth);

    @media (min-width: 1000px){
        grid-template-columns: 1rem 6rem 1fr;
        grid-template-rows: 3rem 1.5rem 2rem;
        height:  6.5rem;
    }

`;

export const SpanStyle = styled.span`
    grid-column: 1/2;
    grid-row: 1/ span 3;
    width: 1rem;
    border-radius: 6px 0 0 6px;
    background-color: var(--third);

`;

export const DivStyle = styled.div`
    grid-column: 2/3;
    grid-row: 1/ span 3;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TitleStyle = styled.p`
    display: flex;
    align-items: flex-end;
    padding-bottom: .3rem;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--sixth);

    @media (min-width: 1000px){
        font-size: 1.3rem;
    }
`;

export const SubtitleStyle = styled.p`
    font-size: 0.9rem;
    font-weight: 600;

    color: var(--sixth);
`;


export const RatingStyle = styled.div`
    span{
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--seventh);
        font-weight: 600;
    }
`;
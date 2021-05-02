import styled, {css} from 'styled-components';

export const OlStyle = styled.ol`
    min-height: 50vh;
    margin: 0;
    list-style: none;

    @media (min-width: 1000px){
        margin: auto;
        width: 45rem;
    }

    .move-sortable{
        background-color: white;
        border: 2px solid var(--sixth);
        border-radius: 12px;
        li{
            margin: 1rem;
        }
    }
`;

export const LiStyle = styled.li`
    display: grid;
    grid-template-columns: .7rem 3.5rem  1fr 7rem;
    grid-template-rows: 1fr;
    height: 3.5rem;
    margin: 2.5rem 1rem;
    margin-left: 0;
    border-radius: 6px;
    counter-increment: my-counter; 
    background-color: ${props => props.first ? 'var(--third)' : 'var(--fourth)'};

        
    &::before {
        content: counter(my-counter) " ";
        display: flex;
        flex-direction: column;
        justify-content: center;
        color:  var(--sixth);
        font-size: 1.6rem;
        font-weight: 600;
        margin-left: -2rem;
        margin-top: -3.5rem;
        height: 3.5rem;
        width: 2rem;

        @media (min-width: 1000px){
            width: 2.2rem;
            font-size: 2.2rem;
            margin-left: -3rem;
        }
    }

    &:hover{
        cursor: move;
    }

    @media (min-width: 1000px){
        grid-template-columns: .7rem 3.5rem  1fr 11rem;
        width: 45rem;
        height: 4.5rem;
    }
`;

export const ImgContainer = styled.div`
    grid-column: 2/3;
    grid-row: 1/2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.5rem;
    height: 3.5rem;

    @media (min-width: 1000px){
        width: 4.5rem;
        height: 4.5rem;
    }
`;

export const PStyle = styled.p`
    grid-column: 3/4;
    grid-row: 1/2;
    display: flex;
    align-items: center;
    height: 3.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--sixth);

    @media (min-width: 1000px){
        font-size: 1.4rem;
        height: 4.5rem;
        padding-left: 2rem;
    }

`;

export const SpanStyle = styled.span`
    grid-column: 1/2;
    grid-row: 1/2;
    width: .7rem;
    height: inherit;
    border-radius: 6px 0 0 6px;
    background-color: transparent;

    ${props => props.first && css`
        background-color: var(--fifth);
    `}

    ${props => props.last && css`
        background-color: var(--seventh);
    `}
`;

export const DivButton = styled.div`
    grid-column: 4/5;
    grid-row: 1/2;
    display: flex;
    justify-content: center;
    align-items: center;
`;


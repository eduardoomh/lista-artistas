import styled, {css} from 'styled-components';

export const UlStyle = styled.ul`
    width: 20rem;
    padding: 1rem;
    margin-left: 1rem;
    margin: auto;
    margin-top: 4rem;
    margin-bottom: 4rem;
`;

export const LiStyle = styled.li`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1rem;
    margin-bottom: 1rem;

    &::before{
        display: inline-block;
        content: " ";
        width: 2rem;
        height: 2rem;
        
        ${props => props.first && css`
            background-color: var(--third);
        `}

        ${props => props.second && css`
            background-color: var(--fifth);
        `}

        ${props => props.third && css`
            background-color: var(--seventh);
        `}

    }

    p{
        display: inline-block;
        padding: 0 1rem;
    }

`;
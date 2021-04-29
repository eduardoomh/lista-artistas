import styled from 'styled-components';

export const OlStyle  = styled.ol`
  list-style: none;
  margin-left: 2rem;
  padding-bottom: 2rem;
`;

export const LiStyle = styled.li`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    counter-increment: my-counter;
    background-color:  var(--fourth);
    border-radius: 6px;
    width: 100vw;
    height: 5rem;
    margin-bottom: 1.5rem;

    &::before {
        content: counter(my-counter) " ";
        display: flex;
        flex-direction: column;
        justify-content: center;
        color:  var(--fifth);
        font-size: 3rem;
        font-weight: bold;
        margin-left: -3rem;
        height: 5rem;
        width: 2rem;
    }
`;

export const DivCircle = styled.div`
    margin-left: 2rem;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    background-color: var(--fifth);
`;

export const DivStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const DivRectangle = styled.div`
    width: 15rem;
    height: 1.2rem;
    margin: .4rem 1.5rem;
    background-color: var(--eighth);
`;
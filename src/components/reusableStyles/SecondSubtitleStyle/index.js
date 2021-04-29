import styled from 'styled-components';

const SecondSubtitleStyle = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--secondary);
    font-size: ${props => props.size ? props.size : '2rem'};
`;

export default SecondSubtitleStyle;
import styled from 'styled-components';

const SubtitleStyle = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--secondary);
    font-size: ${props => props.size ? props.size : '3rem'};
`;

export default SubtitleStyle;
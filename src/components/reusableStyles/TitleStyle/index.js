import styled from "styled-components";

const TitleStyle = styled.h1`
    color: var(--secondary);
    font-size: ${props => props.size ? props.size : '3rem'};
`;

export default TitleStyle;
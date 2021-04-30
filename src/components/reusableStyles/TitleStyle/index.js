import styled from "styled-components";

const TitleStyle = styled.h1`
    color: var(--secondary);
    font-size: ${props => props.size ? props.size : '3rem'};
    margin: 0;

    @media (min-width: 1000px ){
        font-size: ${props => props.size ? props.size : '6rem'};
    }
`;

export default TitleStyle;
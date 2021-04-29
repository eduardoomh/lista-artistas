import styled from 'styled-components';

const ButtonStyle = styled.button`
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-width: 10rem;
    height: 3.5rem;
    border-radius: 6px;
    border: none;
    font-size: 1.2rem;
    background-color:  var(--sixth);
    color: white;
    font-family: 'Source Serif Pro', serif;
    opacity: ${props => props.disabled ? 0.5 : 1};
    

`;

export default ButtonStyle;
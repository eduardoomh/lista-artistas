import styled, {css} from 'styled-components';

const ParagraphStyle = styled.p`
  font-size: ${props => props.size ? props.size : '1.2rem'};
  font-weight: ${props => props.semibold ? 'semibold': 'normal'};
  color: ${props => props.color ? props.color : 'black'};
  padding: 1rem;

  ${props => props.width && css`
    width: 999px;
    margin: auto;
  `}

  ${props => props.center && css`
    text-align: center;
  `}

`;

export default ParagraphStyle;
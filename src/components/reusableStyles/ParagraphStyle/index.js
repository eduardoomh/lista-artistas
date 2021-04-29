import styled from 'styled-components';

const ParagraphStyle = styled.p`
  font-size: ${props => props.size ? props.size : '1.2rem'};
  font-weight: ${props => props.semibold ? 'semibold': 'normal'};
  color: ${props => props.color ? props.color : 'black'};
  padding: 1rem;
`;

export default ParagraphStyle;
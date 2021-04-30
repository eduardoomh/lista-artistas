import styled from 'styled-components';

const FooterStyle = styled.footer`
  height: 24rem;
  padding: 4rem 2rem;
  background-color: var(--secondary);

  @media (min-width: 600px){
    display: flex;
    flex-direction: column;
    height: 10rem;
    padding-top: 1rem;
  }
`;

export default FooterStyle;
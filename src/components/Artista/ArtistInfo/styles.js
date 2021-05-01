import styled from 'styled-components';

export const DivContainerStyle = styled.div`
  background-color: var(--third);
`;

export const DivStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem 3rem;

  @media (min-width: 1000px){
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 10rem 8rem 5rem;
    width: 950px;
    margin: auto;
  }

  @media (min-width: 1100px){
    width: 1050px;
  }

  @media (min-width: 1200px){
    width: 1150px;
  }
`;

export const ImgStyle = styled.img` 
  border-radius: 6px;
  margin-bottom: 2rem;

  @media (min-width: 1000px){
    grid-column: 1/2;
    grid-row: 1/ span 3;
    margin-right: 2rem;
  }
`;

export const PStyle = styled.p`
  display: flex;
  justify-content: flex-start;
  font-weight: 600;
  font-size: 1.4rem;
  color: var(--secondary);

  span{
    font-weight: normal;
    margin-left: 1rem;
  }

  @media (min-width: 1000px){
    font-size: 1.6rem;
    margin-left: 1rem;
  }
`;
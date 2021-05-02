import styled, {css} from 'styled-components';

export const OlStyle  = styled.ol`
  list-style: none;
  margin-left: 2rem;
  padding-bottom: 2rem;
  

  @media (min-width: 1000px){
        margin-top: 4rem;
        padding-bottom: 0.5rem;
    }
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
    transition: .3s;
    animation: first 5s ease-in-out 0.5s 12 backwards;

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

    @media (min-width: 600px){
        width: 30rem;
    }

    @media (min-width: 1000px){
        width: 20rem;
    }

    @media (min-width: 1100px){
        width: 30rem;
    }

    ${props => props.down && css`
        animation: lista 6s ease-in-out 0.5s infinite backwards;

        @keyframes lista {
            10%{
                background-color: white;
                transform: translateY(0);
            }
            30%{
                background-color: white;
                transform: translateY(0);
            }
            50%{
                background-color: white;
                transform: translateY(105px);
            }
            70%{
                background-color: white;
                transform: translateY(207px);
            }
            90%{
                background-color: white;
                transform: translateY(309px);
               
            }
            100%{
                 background-color: var(--fourth);
            }
        }
    `}

    
    ${props => props.first && css`
        animation: first 6s ease-in-out 0.5s infinite backwards;

        @keyframes first {
            10%{
                transform: translateY(0);
            }
            30%{
                transform: translateY(0);
            }
            50%{
                transform: translateY(-105px);
            }

            90%{
                transform: translateY(-105px);
            }
        }
    `}

    ${props => props.second && css`
        animation: second 6s ease-in-out 0.5s infinite backwards;

        @keyframes second {
            10%{
                transform: translateY(0);
            }
            30%{
                transform: translateY(0);
            }
            50%{
                transform: translateY(0);
            }
            70%{
                transform: translateY(-105px);
            }

            90%{
                transform: translateY(-105px);
            }
        }
    `}

    ${props => props.third && css`
        animation: third 6s ease-in-out 0.5s infinite backwards;

        @keyframes third {
            10%{
                transform: translateY(0);
            }
            30%{
                transform: translateY(0);
            }
            50%{
                transform: translateY(0);
            }
            70%{
                transform: translateY(0);
            }

            90%{
                transform: translateY(-105px);
            }
        }
    `}

`;

export const DivCircle = styled.div`
    margin-left: 2rem;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    background-color: var(--fifth);
    background-image: ${props => props.img ? `url(${props.img})`  : 'none'};
    background-size: 3.5rem;

    @media (min-width: 1000px){
        width: 3rem;
        height: 3rem;
    }

    @media (min-width: 1100px){
        width: 3.5rem;
        height: 3.5rem;
    }

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

    @media (min-width: 1000px){
        width: 13rem;
        height: 1rem;
    }

    @media (min-width: 1100px){
        width: 20rem;
    }
`;
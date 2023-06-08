import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.nav`
width: 100%;
display: flex;
flex-direction: column;
gap: 2rem;

button{
  width: 100%;
  height: 4rem;
  border-radius: 27px;
  border: none;
  cursor:pointer
}

button:first-child { /* Estilizando o primeiro botão */
    background-image: linear-gradient(to right, #F9B24E 1%, #FF6489 100%);

    span{
    font-weight: 900;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

    }

  }

  button:last-child { /* Estilizando o último botão */
    background-color: ${(props) => props.theme.colors.white};
    border: 1px solid #F9B24E;
    transition: background-color 0.3s ease;
    span{
    font-weight: 900;
    color: #FE7E02
;
    }

    &:hover{
      background-color: ${({ theme }) => darken(0.1, theme.colors.white)};

    }

  }
`

import styled from 'styled-components';
import { ContainerLoginForm } from '../Main/styles';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  label {
    display: flex;
    gap: 0.5rem;
  }
  @keyframes translate {
    0% {
      /* transform: translateY(700px); */
      transform: translatex(900px);
      opacity: 0;
    }
    100% {
      transform: translatex(0);
      opacity: 1;
    }
  }
  animation: translate 2s normal;

  h1 {
    font-size: ${({ theme }) => theme.fontSize['3xl']};
    width: 22rem;
    @media (max-width: 309px) {
      width: 100%;
    }
  }

  .rotate {
    height: 60vh;
    display: flex;
    align-items: center;
    svg {
      height: auto;
      width: 4rem;
      @keyframes rotate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      animation: spin 1s infinite linear;
    }
  }
`;
export const ContainerNewPost = styled(ContainerLoginForm)`
  min-height: 17rem;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  @media (max-width: 287px) {
    width: 100%;
  }
  textarea {
    background-color: aqua;
  }
  input[type='text'] {
    background-color: ${({ theme }) => theme.colors.secondary};
    width: 18rem;
    @media (max-width: 265px) {
      width: 100%;
    }
  }
  .button {
    width: 100%;
  }
  input::placeholder {
    font-weight: bold;
    text-align: center;
  }
`;
export const ContainerSingUpForm = styled(ContainerLoginForm)`
  border: none;
  margin: 5rem;
  .label-checkboc {
    margin-bottom: 3rem;
    margin-right: 1rem;
  }
  .paragraph {
    width: 80%;
  }
`;

import styled from 'styled-components';
import { ContainerLoginForm } from '../Main/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  main {
    display: flex;
    flex-direction: column-reverse;
    flex: 1;
  }
`;

export const Rotate = styled.div`
  position: relative;
  top: 13rem;

  svg {
    width: 2rem;
    height: auto;
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    animation: spin 1s infinite linear;
  }
`;
export const ContainerNewPost = styled(ContainerLoginForm)`
  min-height: 17rem;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  @media (max-width: 287px) {
    width: 100%;
  }
  input[type='text'] {
    background-color: ${({ theme }) => theme.colors.secondary};
    height: 1rem;
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

import styled from 'styled-components';
import { ContainerLoginForm } from '../LoginForm/styles';

export const ContainerNewPost = styled(ContainerLoginForm)`
  height: 17rem;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  @media (max-width: 287px) {
    width: 100%;
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

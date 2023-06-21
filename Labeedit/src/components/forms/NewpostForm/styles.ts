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
    width: 18rem;
    vertical-align: top;
    @media (max-width: 265px) {
      width: 100%;
    }
  }
  .button {
    width: 100%;
  }
`;

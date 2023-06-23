import styled from 'styled-components';
import { ContainerLoginForm } from '../LoginForm/styles';
interface StyledComponentProps {
  isActive: boolean;
}

export const ContainerSingUpForm = styled(ContainerLoginForm)<StyledComponentProps>`
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

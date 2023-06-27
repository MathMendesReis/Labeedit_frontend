import styled from 'styled-components';
import { ContainerButtonCustomer } from '../../components/buttonCustomer/styles';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;

  svg {
    width: 10rem !important;
    height: auto;
  }
`;

export const ButtonCreatedAccount = styled(ContainerButtonCustomer)`
  color: ${({ theme }) => theme.colors.orange};
  background: transparent;
  border: 1px solid;
  margin-top: 2rem;
`;

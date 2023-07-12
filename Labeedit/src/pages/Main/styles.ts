import styled from 'styled-components';
import { ContainerButtonCustomer } from '../../components/buttonCustomer/styles';
import { darken } from 'polished';

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

export const ContainerLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 35rem;
  gap: 1.5rem;
  border-bottom: 3px solid;
  border-image: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.pink} 0%,
    ${({ theme }) => theme.colors.yellow} 50%
  );
  border-image-slice: 1;
  padding-bottom: 1rem;
  @media (max-width: 509px) {
    width: 100%;
    padding: 1rem;
  }
  input[type='email'],
  input[type='text'],
  input[type='password'] {
    padding: 1rem;
    border-radius: 12px;
    flex: 1;
    border: 1px solid ${({ theme }) => darken(0.2, theme.colors.secondary)};
    @media (max-width: 233px) {
      width: 100%;
    }
  }
  .grouped-password {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    .error {
      align-self: center;
      color: red;
      font-weight: 400;
      font-size: 1.2rem;
    }
    svg {
      display: inline;
      border: none;
      cursor: pointer;
      z-index: 999;
      position: relative;
      top: -2.3rem;
      width: 1.5rem !important;
      height: 100%;
      left: -10px;
      color: ${({ theme }) => darken(0.3, theme.colors.background)};
    }
  }

  .error {
    align-self: center;
    color: red;
    font-weight: 400;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .loading {
    svg {
      height: 1.1rem;
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
  }
`;

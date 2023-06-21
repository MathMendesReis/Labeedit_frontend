import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.form`
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
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    @media (max-width: 233px) {
      width: 100%;
    }
  }
  .grouped-password {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    p {
      align-self: center;
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
      color: ${({ theme }) => darken(0.1, theme.colors.background)};
    }
  }
`;

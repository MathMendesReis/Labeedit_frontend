import styled from 'styled-components';

export const Container = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 2.5rem;
  svg {
    grid-column: 2/3;
    width: auto;
    height: 5rem;
    align-self: center;
    justify-self: center;
  }
  .buttonCloseComents {
    grid-column: 1/2;
    align-self: center;
    justify-self: center;
  }
  .button {
    grid-column: 3;
    width: 3rem;
    height: 2rem;
    align-self: center;
    justify-self: center;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.blue};
    font-weight: 700;
    text-transform: capitalize;
    font-size: large ${({ theme }) => theme.fontSize.md};
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;

    &:active {
      transform: scale(0.96);
    }
  }
`;

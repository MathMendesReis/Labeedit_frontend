import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  width: 19rem;
  border: 0.5px solid ${({ theme }) => theme.colors.secondary};
  padding: 1rem;
  footer {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    justify-content: center;
    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      border: 0.5px solid ${({ theme }) => theme.colors.secondary};
      border-radius: 27px;
      padding: 0.5rem 0.7rem 0.5rem 0.7rem;
      button {
        border: none;
        cursor: pointer;
        background: none;
        svg {
          transition: background-color 0.3s, transform 0.3s;
          &:active {
            transform: scale(0.96);
          }
        }
      }
    }
  }
  @media (max-width: 265px) {
    width: 100%;
  }
`;

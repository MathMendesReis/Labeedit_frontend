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
  margin-bottom: 1rem;
  header {
    p {
      color: '#6F6F6F';
    }
  }
  main {
    p {
      color: ${({ theme }) => theme.colors.black};
      font-weight: 600;
    }
  }
  footer {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    justify-content: center;
    @media (max-width: 167px) {
      flex-direction: column;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      border: 0.5px solid ${({ theme }) => theme.colors.secondary};
      border-radius: 27px;
      min-height: 3rem;
      min-width: 4rem;
      padding: 0.1rem 1rem 0.2rem 1rem;
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

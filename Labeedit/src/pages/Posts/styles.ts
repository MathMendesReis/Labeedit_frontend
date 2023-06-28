import styled from 'styled-components';

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

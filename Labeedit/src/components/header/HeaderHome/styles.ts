import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-top: 5rem;
  gap: 1rem;
  h1 {
    font-size: clamp(2em, 4vw, 3em);
    background: linear-gradient(
      45deg,
      ${({ theme }) => theme.colors.pink} 0%,
      ${({ theme }) => theme.colors.yellow} 70%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @keyframes translate {
      0% {
        /* transform: translateY(700px); */
        transform: translatex(900px);
        opacity: 0;
      }
      100% {
        transform: translatex(0);
        opacity: 1;
      }
    }
    animation: translate 2s normal;
  }
  h1::first-letter {
    font-size: 3rem;
  }
  h3 {
    @keyframes translate {
      0% {
        /* transform: translateY(700px); */
        transform: translatex(900px);
        opacity: 0;
      }
      80% {
        transform: translatex(-100px);
        opacity: 1;
      }
    }
    animation: translate 2s normal;
  }
  svg {
    width: 10rem !important;
    height: auto;
  }
`;

import styled, { css } from 'styled-components';
interface containerProps {
  isErroInput: boolean;
}

export const Container = styled.div<containerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
  margin-top: 2rem;

  > header {
    display: flex;
    align-items: flex-start;
    margin-top: 2rem;
    margin-bottom: 2rem;

    h2 {
      align-self: flex-start;
      width: 22.6875rem;
      @media (max-width: 370px) {
        width: 100%;
      }
    }
  }
  > main {
    form {
      display: flex;
      flex-direction: column;
      gap: 0.7847rem;
      padding: 1rem;
      align-items: center;
      margin-top: 2rem;
      margin-bottom: 2rem;

      > label {
        position: relative;
        display: inline-block;
        @media (max-width: 380px) {
          width: 100%;
        }
      }
      > div {
        margin-top: 2rem;
        margin-bottom: 2rem;
        width: 23rem;
        @media (max-width: 360px) {
          width: 100%;
          margin: 0;
        }

        > span {
          display: block;
          margin-bottom: 1rem;
        }
        > label:last-child {
          display: flex;
          align-items: center;
          gap: 1rem;
          > input {
            width: 1.11581rem;
            height: 1.125rem;
            flex-shrink: 0;
          }
        }
      }
      p {
        color: red;
        font-weight: 500;
        margin-top: 0.5rem;
      }
      > input:last-child {
        padding-right: 2.5rem;
      }
      input {
        width: 22.6875rem;
        height: 3.75rem;
        flex-shrink: 0;
        padding: 0.7847rem;
        ${({ isErroInput }) =>
          isErroInput
            ? css`
                border: 1px solid red;
              `
            : css`
                border: 1px solid black;
              `}
        @media (max-width: 380px) {
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 603px) {
    span {
      width: 100%;
      margin: 0;
    }
  }
`;

import styled, { css } from 'styled-components';

interface containerProps {
  isErroInput: boolean;
}
export const Container = styled.div<containerProps>`
  padding-top: 6rem;
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    > header {
      img {
        width: 5.25rem;
        height: 5.25131rem;
      }
    }
    > main {
      span {
        color: #373737;
        font-family: IBM Plex Sans;
        font-size: 2.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
    footer {
      span {
        color: #000;
        text-align: center;
        font-family: IBM Plex Sans;
        font-size: 1rem;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
      }
    }
  }
  > main {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 5rem;
    form {
      display: flex;
      flex-direction: column;
      gap: 0.7847rem;
      padding: 1rem;
      label {
        position: relative;
        display: inline-block;
        @media (max-width: 388px) {
          width: 100%;
        }
      }
      > p {
        color: red;
        font-weight: 500;
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
        @media (max-width: 388px) {
          width: 100%;
        }
      }
      @media (max-width: 388px) {
        width: 100%;
      }
      span {
        margin-top: 1rem;
        width: 22.68788rem;
        height: 0.0625rem;
        background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%), #acacac;
        @media (max-width: 388px) {
          width: 100%;
        }
      }
    }
  }
  > footer {
    display: flex;
    justify-content: center;
    button {
      display: flex;
      width: 22.8125rem;
      justify-content: center;
      align-items: center;
      padding: 0.8125rem 8.3125rem;
      gap: 0.625rem;
      border-radius: 2.6875rem;
      border: 1px solid #fe7e02;
      color: #fe7e02;
      text-align: center;
      font-family: Noto Sans;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      @media (max-width: 388px) {
        width: 90%;
        padding: 0;
      }
    }
  }

  .showPassword {
    background-color: transparent;
    border: none;
    position: absolute;
    top: 55%;
    right: 0.8rem;
    transform: translateY(-50%);
  }
`;

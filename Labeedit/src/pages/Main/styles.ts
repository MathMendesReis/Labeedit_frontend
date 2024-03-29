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
        /* font-family: IBM Plex Sans; */
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
      }
      span {
        margin-top: 1rem;
        width: 22.68788rem;
        height: 0.0625rem;
        background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%), #acacac;
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
      padding: 0.8125rem 1.3125rem;
      gap: 0.625rem;
      border-radius: 2.6875rem;
      border: 1px solid #fe7e02;
      color: #fe7e02;
      text-align: center;
      font-family: Noto Sans;
      font-size: 1.12rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }

  .showPassword {
    background-color: transparent;
    border: none;
    position: absolute;
    top: 48%;
    right: 0.8rem;
    transform: translateY(-50%);
  }

  @media (max-width: 388px) {
    header {
      display: flex;
      flex-direction: column;
      align-items: center;
      > header {
        img {
        }
      }
      > main {
        span {
        }
      }
      footer {
        span {
        }
      }
    }
    > main {
      width: 100%;
      padding: 4rem 1rem 4rem 1rem;
      form {
        label {
          width: 100%;
        }
        > p {
        }
        > input:last-child {
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
      button {
        width: 90%;
        padding: calc(0.8125rem / 2) calc(8.3125rem / 2);
      }
    }
  }

  .glitch-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #ffffff;
  }

  .glitch {
    position: relative;
    font-size: 2.25rem;
    font-weight: 700;
    color: #373737;
    letter-spacing: 3px;
    z-index: 1;
  }

  .glitch:before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: -2px;
    width: 100%;
    color: 50px;
    background-color: #ffffff;
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
    animation: noise-before 3s infinite linear alternate-reverse;
  }

  .glitch:after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 2px;
    width: 100%;
    color: 50px;
    background-color: #ffffff;
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
    animation: noise-after 2s infinite linear alternate-reverse;
  }

  @keyframes noise-before {
    0% {
      clip: rect(61px, 9999px, 52px, 0);
    }
    5% {
      clip: rect(33px, 9999px, 144px, 0);
    }
    10% {
      clip: rect(121px, 9999px, 115px, 0);
    }
    15% {
      clip: rect(144px, 9999px, 162px, 0);
    }
    20% {
      clip: rect(62px, 9999px, 180px, 0);
    }
    25% {
      clip: rect(34px, 9999px, 42px, 0);
    }
    30% {
      clip: rect(147px, 9999px, 179px, 0);
    }
    35% {
      clip: rect(99px, 9999px, 63px, 0);
    }
    40% {
      clip: rect(188px, 9999px, 122px, 0);
    }
    45% {
      clip: rect(154px, 9999px, 14px, 0);
    }
    50% {
      clip: rect(63px, 9999px, 37px, 0);
    }
    55% {
      clip: rect(161px, 9999px, 147px, 0);
    }
    60% {
      clip: rect(109px, 9999px, 175px, 0);
    }
    65% {
      clip: rect(157px, 9999px, 88px, 0);
    }
    70% {
      clip: rect(173px, 9999px, 131px, 0);
    }
    75% {
      clip: rect(62px, 9999px, 70px, 0);
    }
    80% {
      clip: rect(24px, 9999px, 153px, 0);
    }
    85% {
      clip: rect(138px, 9999px, 40px, 0);
    }
    90% {
      clip: rect(79px, 9999px, 136px, 0);
    }
    95% {
      clip: rect(25px, 9999px, 34px, 0);
    }
    100% {
      clip: rect(173px, 9999px, 166px, 0);
    }
  }

  @keyframes noise-after {
    0% {
      clip: rect(26px, 9999px, 33px, 0);
    }
    5% {
      clip: rect(140px, 9999px, 198px, 0);
    }
    10% {
      clip: rect(184px, 9999px, 89px, 0);
    }
    15% {
      clip: rect(121px, 9999px, 6px, 0);
    }
    20% {
      clip: rect(181px, 9999px, 99px, 0);
    }
    25% {
      clip: rect(154px, 9999px, 133px, 0);
    }
    30% {
      clip: rect(134px, 9999px, 169px, 0);
    }
    35% {
      clip: rect(26px, 9999px, 187px, 0);
    }
    40% {
      clip: rect(147px, 9999px, 137px, 0);
    }
    45% {
      clip: rect(31px, 9999px, 52px, 0);
    }
    50% {
      clip: rect(191px, 9999px, 109px, 0);
    }
    55% {
      clip: rect(74px, 9999px, 54px, 0);
    }
    60% {
      clip: rect(145px, 9999px, 75px, 0);
    }
    65% {
      clip: rect(153px, 9999px, 198px, 0);
    }
    70% {
      clip: rect(99px, 9999px, 136px, 0);
    }
    75% {
      clip: rect(118px, 9999px, 192px, 0);
    }
    80% {
      clip: rect(1px, 9999px, 83px, 0);
    }
    85% {
      clip: rect(145px, 9999px, 98px, 0);
    }
    90% {
      clip: rect(121px, 9999px, 154px, 0);
    }
    95% {
      clip: rect(156px, 9999px, 44px, 0);
    }
    100% {
      clip: rect(67px, 9999px, 122px, 0);
    }
  }
`;

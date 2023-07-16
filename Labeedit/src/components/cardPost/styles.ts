import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  width: 22.75rem;
  padding: 0.5625rem 0.625rem;
  flex-direction: column;
  align-self: center;
  gap: 1.125rem;
  border-radius: 0.75rem;
  border: 1px solid #e0e0e0;
  justify-content: center;
  margin-bottom: 2rem;
  cursor: pointer;
  > header {
    background-color: transparent;
    > h2 {
      color: #6f6f6f;
      text-align: start;
      font-family: IBM Plex Sans;
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      width: 10rem;
    }
  }
  > main {
    span {
      color: #000;
      font-family: IBM Plex Sans;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      width: 20.9375rem;
    }
  }

  > footer {
    display: flex;
    gap: 0.5rem;
    div:last-child {
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      width: 4.125rem;
    }
    div {
      display: flex;
      width: 6.125rem;
      height: 1.74288rem;
      padding: 0.29169rem;
      justify-content: space-between;
      align-items: center;
      flex-shrink: 0;
      border-radius: 1.75rem;
      border: 0.797px solid #ececec;
      span {
        color: #6f6f6f;
        text-align: center;
        font-family: IBM Plex Sans;
        font-size: 0.59756rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
      button {
        width: 1.23231rem;
        height: 1.23231rem;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        border: none;
        background-color: transparent;
        img {
          width: 1.23231rem;
          height: 1.23231rem;
        }
      }
    }
  }

  @media (max-width: 330px) {
    width: 90%;
    > header {
      > h2 {
      }
    }
    > main {
      span {
      }
    }

    > footer {
      div:last-child {
      }
      div {
        span {
        }
        button {
          img {
            width: 1.23231rem;
            height: 1.23231rem;
          }
        }
      }
    }
  }
`;

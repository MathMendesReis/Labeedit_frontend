import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  width: 22.8125rem;
  padding: 0.8125rem 8.3125rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 1.6875rem;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  border: none;
  color: #fff;
  text-align: center;
  font-family: Noto Sans;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  > div {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 60%;
    background: conic-gradient(#0000 10%, #f2f4e8);
    -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 5px), #000 0);
    animation: s3 1s infinite linear;
  }
  @keyframes s3 {
    to {
      transform: rotate(1turn);
    }
  }
  @media (max-width: 388px) {
    width: 100%;
    padding: calc(0.8125rem / 2) calc(8.3125rem / 2);
  }
`;

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
  @media (max-width: 388px) {
    width: 100%;
    padding: 0;
  }
`;

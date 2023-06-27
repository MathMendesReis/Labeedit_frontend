import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: ${({ theme }) => theme.fontSize['3xl']};
    width: 22rem;
    @media (max-width: 309px) {
      width: 100%;
    }
  }
`;

import styled from 'styled-components';

export const ContainerButtonCustomer = styled.button`
  width: 18rem;
  height: 3rem;
  border-radius: 27px;
  border: none;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.pink} 0%,
    ${({ theme }) => theme.colors.yellow} 100%
  );
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 700;
  font-family: ${({ theme }) => theme.fontFamily.sans};
  transition: background-color 0.3s, transform 0.3s;
  &:active {
    transform: scale(0.96);
  }

  @media (max-width: 253px) {
    width: 100%;
  }
`;

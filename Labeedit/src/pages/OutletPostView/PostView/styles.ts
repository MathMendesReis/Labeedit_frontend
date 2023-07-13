import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    textarea {
      width: 22.75rem;
      height: 8.1875rem;
      flex-shrink: 0;
      border-radius: 0.75rem;
      background: #ededed;
      padding: 1rem;
    }
  }
  section {
    display: flex;
    flex-direction: column-reverse;
    gap: 0.625rem;
  }
  @media (max-width: 330px) {
    form {
      textarea {
        width: 100%;
      }
    }
  }
`;

import styled from "styled-components";

export const Container = styled.main`
height: auto;
display: flex;
flex-direction: column;
width: auto;
align-items: center;
justify-content: center;
width:100%;

form{
  width: 22.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  input[type='post']{
  width: 100%;
  min-height: 15rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border:2px solid transparent;
  border-radius:12px;

  @media (max-width:414px) {
    /* width: 90%; */
  }
}
}

.buttonPost{
  @media (max-width:414px) {
    width: 100%;
    border:12px
  }
}
`

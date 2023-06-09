import styled from "styled-components";

export const Container = styled.form`
height: 30vh;
width: 25rem;
gap: 2rem;
display: flex;
flex-direction: column;
justify-content: center;
div input{
width: 100%;
padding: 1rem;
border:1px solid transparent;
border:4px;
}

.active{
  width: 100%;
  height: 3.50rem;
  border-radius:27px;
  border:none;
  cursor: pointer;
  color: #FE7E02;
  font-weight: 900;
  font-size: ${({theme})=>theme.fontSize["2xl"]};
}

@media (max-width: 440px) {
  width:100%;
  height: auto;
  }
`

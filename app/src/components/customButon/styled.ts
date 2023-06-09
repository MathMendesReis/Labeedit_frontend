import styled from "styled-components";

export const Container = styled.nav`
button{
  width: 100%;
  height: 3.50rem;
  border-radius:27px;
  border:none;
  cursor: pointer;
  background-image: linear-gradient(to right, #F9B24E 1%, #FF6489 100%);
  color: white;
  font-weight: 900;
  font-size: ${({theme})=>theme.fontSize["2xl"]};
}
`

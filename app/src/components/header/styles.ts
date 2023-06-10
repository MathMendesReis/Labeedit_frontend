import styled from "styled-components";


export const Container = styled.header`
height: 15vh;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
width: 100%;
align-self: center;

svg{
  width: auto;
  height: 100%;
  grid-column: 2/3;
  align-self: center;
  justify-self: center;
}

.link{
  grid-column: 3;
  align-self: center;
  justify-self: flex-end;
  text-decoration: none;
  color: #4088CB
;
}
`

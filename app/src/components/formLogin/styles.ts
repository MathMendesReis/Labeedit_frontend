import styled from "styled-components";

export const Container = styled.form`
display: flex;
flex-direction: column;
width: 18rem;
gap: 1rem;

@media (max-width:302px) {
  width: 100%;
}
.field{



  input{
width: 100%;
height: 3rem;
padding: 0.775rem;
border: 1px solid transparent;
}
}


`

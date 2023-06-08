import styled from "styled-components";

export const Container = styled.article`
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;


width: 100%;
img{
height:auto;
width: 13.777rem;

@media (max-width:300px ) {

  width: 70%;
}

}
h1{
  flex: 1;

  font-size: ${({theme})=>theme.fontSize["4xl"]};
  font-style:${({theme})=>theme.fontFamily.h1} ;

  font-weight: 700;
  line-height: 46.8px;

  @media (max-width:300px ) {

    font-size: 180%;

    font-weight: 900;

  }

  p{
  font-style:${({theme})=>theme.fontFamily.h1} ;
  font-weight: 400;
  }
}
`

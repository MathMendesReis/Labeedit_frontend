import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 2rem;
form{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 25rem;
  height: 23rem;
  justify-content: flex-end;
  @media (max-width:430px) {
    width: 100%;

  }
  input[type='email'],
  input[type='password']{
    height: 3.5rem;
    border-radius: 12px;
    border: 1px solid transparent;
    padding: 1rem;
    width: 100%;
  }



  p{
    color: red;
  }
}



div{
  width: 100%;
  display: flex;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  img{
    height: 15rem;
    width: 15rem;
    @media (max-width:269px) {
      height: 10rem;
      width: 10rem;
    }
  }

}
  .buttonCreateAccount{
    width:25rem;
  height: 3.50rem;
  border-radius:27px;
  border:none;
  cursor: pointer;
  text-decoration: none;
  border: 1px solid #FE7E02;
  color: #FE7E02;
  font-weight: 900;
  font-size: ${({theme})=>theme.fontSize["2xl"]};
  }
`


export const Input = styled.input`
  width: 100%;
  height: 3.50rem;
  border-radius:27px;
  border:none;
  cursor: pointer;
  background-image: linear-gradient(to right, #F9B24E 1%, #FF6489 100%);
  color: white;
  font-weight: 900;
  font-size: ${({theme})=>theme.fontSize["2xl"]};

`

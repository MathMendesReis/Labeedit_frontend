import styled from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;

form{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 25rem;
  height: auto;
  justify-content: flex-end;
  margin-top: 8rem;
  margin-bottom:10rem ;
  @media (max-width:430px) {
    width: 100%;

  }
  input[type='email'],
  input[type='password'],
  input[type='text']
  {
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


.paragrafh{
  color:black;
  margin-top: 15px;
}

.checkbox{
  display: flex;
  gap: 10px;
  margin-top: 15px;
  align-items: center;

  input{
    height: auto;
    width: 3rem;
  }
}

`

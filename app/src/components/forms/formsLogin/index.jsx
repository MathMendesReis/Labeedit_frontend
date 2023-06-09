import { NavLink } from "react-router-dom";
import { CustomButton } from "../../customButon";
import { Container } from "./styles";

export function FormLogin() {
  return(
    <Container>
      <div>
        <input type="text" placeholder="email" />
      </div>
      <div>
        <input type="password" placeholder="<PASSWORD>" />
      </div>
      <CustomButton to="/" textButon="continuar"/>
      <NavLink to='/createaccount' >
        <button className='active' >
          <span>Crie uma conta!</span>
        </button>
      </NavLink>
    </Container>
  )
}

import { ButtonsFormLogin } from "../buttonsFormLogin";
import { Container } from "./styles";

export function FormLogin() {
  return(
    <Container>
      <div className="field">
      <input type="text" placeholder="E-mail" autoComplete="email"/>
      </div>
      <div className="field">
      <input type="text" placeholder="Senha"/>
      </div>
      <ButtonsFormLogin/>
    </Container>
  )
}

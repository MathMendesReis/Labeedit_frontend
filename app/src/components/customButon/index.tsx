import { NavLink } from "react-router-dom";
import { Container } from "./styled";

interface PropsButton {
  to:string,
  textButon:string
}

export function CustomButton({to,textButon}:PropsButton) {
  return(
    <Container>
      <NavLink to={to}>
        <button >
          <span>{textButon}</span>
        </button>
      </NavLink>
    </Container>
  )
}


import { Link, useLocation } from "react-router-dom";
import { Container } from "./styles";


import {ReactComponent as Logo} from '../../assets/logo.svg'
import { RoutesPaths } from "../../routes";


export function Header() {

  const location = useLocation()
  return (
    <Container>
      <Logo/>
      <Link to={RoutesPaths.mainPage} className="link">{location.pathname === RoutesPaths.createAccountPages? 'Entrar':'Logout'} </Link>
    </Container>
  );
}

import React  from "react";
import { Container } from "./styled";

import logo from '../../assets/logo.svg'
export function Logo() {
  return(
  <Container>
    <img src={logo} alt="Logo Labeedit" />
    <h1>LabEddit</h1>
    <p>O projeto de rede social da Labenu</p>
  </Container>
  )
}

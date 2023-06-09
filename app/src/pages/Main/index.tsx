import { Container } from './styles'

import Logo from '../../assets/logo.svg'
import { FormLogin } from '../../components/forms/formsLogin'

export default function Main() {
  return (
    <Container>
      <div>
        <img src={Logo} alt="logo" />
        <h1>LabEddit</h1>
        <h3>O projeto de rede social da Labenu</h3>
      </div>
      <section>
        <FormLogin/>
      </section>
    </Container>
  )
}

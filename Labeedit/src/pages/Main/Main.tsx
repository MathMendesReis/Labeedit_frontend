import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import Logo from '../../assets/logo.svg';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ButtonCustomer from '../../components/CustomerButton';

const schema = yup
  .object({
    email: yup.string().required('O email é obrigatório.').email('O email deve ser válido.'),
    password: yup.string().required('A senha e obrigatória'),
  })
  .required();
function Main() {
  const [isErroInput, setIsErroInput] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setIsErroInput(true);
    } else {
      setIsErroInput(false);
    }
  }, [errors]);
  const onSubmit = (data: any) => {
    return;
  };

  return (
    <Container isErroInput={isErroInput}>
      <header>
        <header>
          <img src={Logo} alt='logotipo do labeedit' />
        </header>
        <main>
          <span>LabEddit</span>
        </main>
        <footer>
          <span>O projeto de rede social da Labenu</span>
        </footer>
      </header>
      <main>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register('email')} placeholder='E-mail' />
          <p>{errors.email?.message}</p>

          <input {...register('password')} placeholder='Senha' />
          <p>{errors.password?.message}</p>

          <ButtonCustomer text='Continuar' />
          <span></span>
        </form>
      </main>
      <footer>
        <button>Crie uma conta!</button>
      </footer>
    </Container>
  );
}

export default Main;

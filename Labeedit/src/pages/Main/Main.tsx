import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import Logo from '../../assets/logo.svg';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ButtonCustomer from '../../components/CustomerButton';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const schema = yup
  .object({
    email: yup.string().required('O email é obrigatório.').email('O email deve ser válido.'),
    password: yup.string().required('A senha e obrigatória'),
  })
  .required();
function Main() {
  const [isErroInput, setIsErroInput] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<string>('text');

  const handleTogglePassword = () => {
    if (showPassword === 'text') {
      setShowPassword('password');
    } else {
      setShowPassword('text');
    }
  };

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

  interface login {
    email: string;
    password: string;
  }
  const onSubmit = (data: login) => {
    console.log(data);
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

          <label>
            <input {...register('password')} placeholder='Senha' type={showPassword} />
            <button type='button' onClick={handleTogglePassword} className='showPassword'>
              {showPassword === 'text' ? <IoMdEyeOff /> : <IoMdEye />}
            </button>
            <p>{errors.password?.message}</p>
          </label>
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

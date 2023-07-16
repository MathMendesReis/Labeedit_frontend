import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import Logo from '../../assets/logo.svg';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ButtonCustomer from '../../components/CustomerButton';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { key } from '../../services/createPost';
import { handleTogglePassword } from '../../helpers/handleTogglePassword';

const schema = yup
  .object({
    email: yup.string().required('O email é obrigatório.').email('O email deve ser válido.'),
    password: yup.string().required('A senha e obrigatória'),
  })
  .required();
function Main() {
  const [isErroInput, setIsErroInput] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<string>('password');
  const [showError, setShowError] = useState<string>('');
  const navigate = useNavigate();
  const singupNavigate = () => {
    navigate('/singup');
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
  const onSubmit = async (data: login) => {
    setIsLoading(true);
    const { email, password } = data;
    try {
      const response = await api.post('/users/login', {
        email,
        password,
      });
      const token = response.data.token;
      localStorage.setItem(key, token);
      navigate('/postView');
    } catch (error) {
      const errorMessage = (error as any).response?.data?.error;
      setShowError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container isErroInput={isErroInput}>
      <header>
        <header>
          <img src={Logo} alt='logotipo do labeedit' />
        </header>
        <main>
          <div className='glitch-wrapper'>
            <span className='glitch' data-text='LabEddit'>
              LabEddit
            </span>
          </div>
        </main>
        <footer>
          <span>O projeto de rede social da Labenu</span>
        </footer>
      </header>
      <main>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue='' {...register('email')} placeholder='E-mail' />
          <p>{errors.email?.message}</p>

          <label>
            <input
              defaultValue=''
              {...register('password')}
              placeholder='Senha'
              type={showPassword}
            />
            <button
              type='button'
              onClick={() => {
                handleTogglePassword(showPassword, setShowPassword);
              }}
              className='showPassword'
            >
              {showPassword === 'password' ? <IoMdEyeOff /> : <IoMdEye />}
            </button>
            <p>{errors.password?.message}</p>
            <p>{showError}</p>
          </label>
          <ButtonCustomer text='Continuar' isLoading={isLoading} />
          <span></span>
        </form>
      </main>
      <footer>
        <button
          onClick={() => {
            singupNavigate();
          }}
        >
          Crie uma conta!
        </button>
      </footer>
    </Container>
  );
}

export default Main;

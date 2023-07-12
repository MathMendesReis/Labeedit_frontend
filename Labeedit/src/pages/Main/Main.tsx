import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useMutation } from 'react-query';
import { NavLink, useNavigate } from 'react-router-dom';
import HeaderHome from '../../components/header/HeaderHome';
import { functionShowPassword } from '../../helpers/showPassword';
import api from '../../services/api';
import { ButtonCreatedAccount, Container, ContainerLoginForm } from './styles';
import { FormValuesLogin, schema } from './validationSchemma';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import ButtonCustomer from '../../components/buttonCustomer';
import usersAPi from '../../services/usersAPI';
import { queryClient } from '../../services/queryClient';

function Main() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  // Obtém o cache de consultas do QueryClient
  const queryCache: any = queryClient.getQueryCache();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValuesLogin>({
    resolver: yupResolver(schema),
  });

  const { login } = usersAPi();
  const onSubmit: SubmitHandler<FormValuesLogin> = async (FormData) => {
    reset();
    login.mutate(FormData);
  };

  const { data, isLoading } = login;

  function Login() {
    const token = data?.data.token;
    if (token) {
      localStorage.setItem('@token', token);
      navigate('/posts');
    }
  }

  useEffect(() => {
    Login();
  }, [login.isSuccess === true]);
  return (
    <Container>
      <HeaderHome />
      <ContainerLoginForm onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='email'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <input type='email' id='email' autoComplete='email' placeholder='E-mail' {...field} />
          )}
        />
        {errors.email && <p className='error'>{errors.email.message}</p>}
        <Controller
          name='password'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <div className='grouped-password'>
              <input type='password' id='password' placeholder='Password' {...field} />

              {showPassword ? (
                <FaEye
                  onClick={() => {
                    functionShowPassword();
                    setShowPassword(!showPassword);
                  }}
                />
              ) : (
                <FaEyeSlash
                  onClick={() => {
                    functionShowPassword();
                    setShowPassword(!showPassword);
                  }}
                />
              )}
              {errors.password && <p className='error'>{errors.password.message}</p>}
            </div>
          )}
        />
        {login.isError && <p>E-mal ou senha incorreta</p>}
        {isLoading && (
          <div className='loading'>
            <AiOutlineLoading3Quarters />
          </div>
        )}
        <ButtonCustomer textButton='Continuar' buttonType='submit' />
      </ContainerLoginForm>
      <NavLink to='/createaccount'>
        <ButtonCreatedAccount>Criar conta</ButtonCreatedAccount>
      </NavLink>
    </Container>
  );
}

export default Main;

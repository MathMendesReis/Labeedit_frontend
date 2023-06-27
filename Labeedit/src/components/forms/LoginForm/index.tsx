import React, { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { ContainerLoginForm } from './styles';
import { FormValuesLogin, schema } from './validationSchemma';
import { yupResolver } from '@hookform/resolvers/yup';
import { functionShowPassword } from '../../../helpers/showPassword';
import ButtonCustomer from '../../buttonCustomer';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useMutation } from 'react-query';
import api from '../../../services/api';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
// import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function InputForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValuesLogin>({
    resolver: yupResolver(schema),
  });
  const mutation = useMutation({
    mutationFn: (FormData: FormValuesLogin) => {
      return api.post('/users/login', FormData);
    },
  });
  const onSubmit: SubmitHandler<FormValuesLogin> = async (FormData) => {
    reset();
    mutation.mutate(FormData);
  };

  const { data, isLoading } = mutation;

  function Login() {
    const token = data?.data.token;
    if (token) {
      localStorage.setItem('@token', token);
      navigate('/posts');
    }
  }

  useEffect(() => {
    Login();
  }, [mutation.isSuccess === true]);

  return (
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
      {mutation.isError && <p>E-mal ou senha incorreta</p>}
      {isLoading && (
        <div className='loading'>
          <AiOutlineLoading3Quarters />
        </div>
      )}
      <ButtonCustomer textButton='Continuar' buttonType='submit' />
    </ContainerLoginForm>
  );
}

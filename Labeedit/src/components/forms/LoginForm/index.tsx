import React, { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { ContainerLoginForm } from './styles';
import { FormValuesLogin, schema } from './validationSchemma';
import { yupResolver } from '@hookform/resolvers/yup';
import { functionShowPassword } from '../../../helpers/showPassword';
import ButtonCustomer from '../../buttonCustomer';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function InputForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValuesLogin>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValuesLogin> = async (data) => {
    setForm({
      ...form,
      email: data.email,
      password: data.password,
    });
    reset();
  };
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
      {/* {error && <p>E-mail ou password incorretos</p>}
      {isLoading && (
        <div className='loading'>
          <AiOutlineLoading3Quarters />
        </div>
      )} */}
      <ButtonCustomer textButton='Continuar' buttonType='submit' />
    </ContainerLoginForm>
  );
}

import React, { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Container } from './styles';
import { FormValuesLogin, schema } from './validationSchemma';
import { yupResolver } from '@hookform/resolvers/yup';
import { functionShowPassword } from '../../../helpers/showPassword';
import ButtonCustomer from '../../buttonCustomer';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function InputForm() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValuesLogin>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValuesLogin> = (data) => {
    console.log(data);
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='email'
        control={control}
        render={({ field }) => (
          <input type='email' id='email' autoComplete='email' placeholder='E-mail' {...field} />
        )}
      />
      {errors.email && <p className='error'>{errors.email.message}</p>}
      <Controller
        name='password'
        control={control}
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
      <ButtonCustomer textButton='Continuar' buttonType='submit' />
    </Container>
  );
}

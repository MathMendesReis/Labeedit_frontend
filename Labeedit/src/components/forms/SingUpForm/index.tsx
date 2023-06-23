import React, { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { functionShowPassword } from '../../../helpers/showPassword';
import ButtonCustomer from '../../buttonCustomer';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FormValuesLogin, schema } from './validationSchemma';
import { ContainerSingUpForm } from './styles';

export default function SingUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isBorder, setIsBorder] = useState<boolean>(false);

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
    <ContainerSingUpForm isActive={isBorder} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='apelido'
        control={control}
        render={({ field }) => <input type='text' id='apelido' placeholder='Apelido' {...field} />}
      />
      {errors.apelido && <p className='error'>{errors.apelido.message}</p>}
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
      <p className='paragraph'>
        Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade
      </p>
      <Controller
        name='acceptTerms'
        control={control}
        render={({ field }) => (
          <label className='label-checkboc'>
            <input type='checkbox' {...field} />
            Eu concordo em receber emails sobre coisas legais no Labeddit
          </label>
        )}
      />
      {errors.acceptTerms && <p className='error'>{errors.acceptTerms.message}</p>}
      <ButtonCustomer textButton='Continuar' buttonType='submit' />
    </ContainerSingUpForm>
  );
}

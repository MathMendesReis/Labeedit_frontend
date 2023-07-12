import { Container, ContainerSingUpForm } from './styles';
import React, { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FaCircleNotch, FaEye, FaEyeSlash } from 'react-icons/fa';
import { FormValuesRegister, schema } from './validationSchemma';
import { functionShowPassword } from '../../helpers/showPassword';
import ButtonCustomer from '../../components/buttonCustomer';
import usersAPi from '../../services/usersAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreatedAccountPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showNotify, setShowNotify] = useState(false);
  const notify = () => toast('Conta criada com sucesso!');
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValuesRegister>({
    resolver: yupResolver(schema),
  });

  const { createAccount } = usersAPi();
  const { isLoading, status } = createAccount;
  useEffect(() => {
    reset();
    notify();
  }, [showNotify]);

  const onSubmit: SubmitHandler<FormValuesRegister> = async (data) => {
    createAccount.mutate(data);
    setShowNotify(true);
  };
  return (
    <Container>
      <h1>Olá, boas vindas ao LabEddit ;)</h1>
      {isLoading ? (
        <div className='rotate'>
          <FaCircleNotch />
        </div>
      ) : (
        <ContainerSingUpForm onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name='apelido'
            defaultValue=''
            control={control}
            render={({ field }) => (
              <input type='text' id='apelido' placeholder='Apelido' {...field} />
            )}
          />
          {errors.apelido && <p className='error'>{errors.apelido.message}</p>}
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
          <p className='paragraph'>
            Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de
            Privacidade
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
          {createAccount.isError && <p className='error'>E-mail ja cadastrado</p>}
          <ButtonCustomer textButton='Continuar' buttonType='submit' />
        </ContainerSingUpForm>
      )}
      {status === 'success' && <ToastContainer />}
    </Container>
  );
}

export default CreatedAccountPage;

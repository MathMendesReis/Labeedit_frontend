import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import ButtonCustomer from '../../components/CustomerButton';
import { Container } from './styles';
import api from '../../services/api';
import { toast } from 'react-toastify';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { handleTogglePassword } from '../../helpers/handleTogglePassword';

function CreatedAccount() {
  const [showPassword, setShowPassword] = useState<string>('password');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  interface bodyAxios {
    name: string;
    email: string;
    password: string;
    accept_terms: string;
  }
  const schema = yup
    .object({
      name: yup.string().required(),
      email: yup.string().required('O email é obrigatório.').email('O email deve ser válido.'),
      password: yup.string().required('A senha e obrigatória'),
      accept_terms: yup.string().required().oneOf(['true'], 'Você deve aceitar os termos'),
    })
    .required();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async ({ name, email, password, accept_terms }: bodyAxios) => {
    const body = {
      name,
      email,
      password,
      accept_terms: accept_terms ? 'accepted' : '',
    };
    setIsLoading(true);
    try {
      await api.post('users/singup', body);
      toast.success('Usuário atualizado com sucesso!');
      reset();
    } catch (error) {
      console.error('Erro ao criar conta de usuário:', error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Container isErroInput={false}>
      <header>
        <h2>
          Olá, boas vindas ao <br /> LabEddit ;)
        </h2>
      </header>
      <main>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register('name')} placeholder='Apelido' />
          <p>{errors.name?.message}</p>
          <input {...register('email')} placeholder='E-mail' />
          <p>{errors.email?.message}</p>

          <label>
            <input {...register('password')} placeholder='Senha' type={showPassword} />
            <p>{errors.password?.message}</p>
            <button
              type='button'
              onClick={() => {
                handleTogglePassword(showPassword, setShowPassword);
              }}
              className='showPassword'
            >
              {showPassword === 'password' ? <IoMdEyeOff /> : <IoMdEye />}
            </button>
          </label>
          <div>
            <span>
              Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de
              Privacidade
            </span>
            <label>
              <input {...register('accept_terms')} type='checkbox' />
              <span>Eu concordo em receber emails sobre coisas legais no Labeddit</span>
            </label>
          </div>
          <p>{errors.accept_terms?.message}</p>
          <ButtonCustomer text='Cadastrar' isLoading={isLoading} />
        </form>
      </main>
      <footer></footer>
    </Container>
  );
}

export default CreatedAccount;

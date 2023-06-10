import { Container, Input } from './styles'

import Logo from '../../assets/logo.svg'

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from 'react-hook-form'
import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom';
import { RoutesPaths } from '../../routes';
import { useState } from 'react';
import { User } from '../../types/User';



const schema = yup.object({
  email: yup.string().email(`Email invalido`).required(`Campo obrigatorio`),
  password: yup.string().required(`Campo obrigatorio`),
}).required();
type FormData = yup.InferType<typeof schema>;


export default function Main() {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });
  // const onSubmit = (data: FormData) => console.log(data);
  const [submitting, setSubmitting] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

  const handleLogin =(data: FormData)=>{
    if (data.email === 'user@example.com' && data.password === 'password123') {
      const user: User = {
        id: 1,
        username: 'user1',
        email: 'user@example.com',
      };
      setLoggedInUser(user);
      navigate(RoutesPaths.postsPages);
      console.log('Login successful');
    } else {
      console.log('Invalid credentials');
    }
  }






  return (
    <Container>
      <div>
        <img src={Logo} alt="logo" />
        <h1>LabEddit</h1>
        <h3>O projeto de rede social da Labenu</h3>
      </div>
      <form onSubmit={handleSubmit(handleLogin)}>
      <input type='email' {...register("email")} placeholder='E-mail' />
      <p>{errors.email?.message}</p>

      <input type='password' {...register("password")} placeholder='password'/>
      <p>{errors.password?.message}</p>

      <Input type="submit" value={submitting ? 'Enviando...' : 'Continuar'} disabled={submitting} />

      <button type='button' className='buttonCreateAccount'>
        <Link to={RoutesPaths.createAccountPages}>Criar conta</Link>
      </button>
    </form>

    </Container>
  )
}

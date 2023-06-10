import { Container } from './styles'


import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from 'react-hook-form'
import { Input } from '../Main/styles';
import { Header } from '../../components/header';
import { Link, useNavigate } from 'react-router-dom';

const schema = yup.object({
  apelido:yup.string().required(`Campo obrigatorio`),
  email: yup.string().email(`Email invalido`).required(`Campo obrigatorio`),
  password: yup.string().required(`Campo obrigatorio`),
  checkbox:yup.string().required(`Campo obrigatorio`)
}).required();
type FormData = yup.InferType<typeof schema>;


export default function CreateAccount() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });
  const onSubmit = async (data: FormData) => {
    try {

      // Enviar os dados para o servidor
      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Envio bem-sucedido, fazer algo, como redirecionar para outra página
        console.log('Dados enviados com sucesso');
      } else {
        // Tratar erro de envio, exibir mensagem de erro, etc.
        console.error('Erro ao enviar dados');
      }
    } catch (error) {
      console.error('Erro ao enviar dados', error);
    }
  };


  return (
    <Container>
      <Header/>

      <h1>Olá, boas vindas ao LabEddit ;)</h1>

      <form onSubmit={handleSubmit(onSubmit)}>

      <input type='text' {...register("apelido")} placeholder='Apelido' />
      <p>{errors.email?.message}</p>

      <input type='email' {...register("email")} placeholder='E-mail' />
      <p>{errors.email?.message}</p>

      <input type='password' {...register("password")} placeholder='password'/>
      <p>{errors.password?.message}</p>

      <p className='paragrafh'>Ao continuar, você concorda com o nosso <Link to=''>Contrato de usuário</Link> e nossa <Link to=''>Política de Privacidade</Link></p>

      <div className='checkbox'>
      <input {...register("checkbox")} type="checkbox" value="concordo" />

      <p className='paragrafh'>Eu concordo em receber emails sobre coisas legais no Labeddit</p>
      </div>
      <p>{errors.checkbox?.message}</p>




      <Input type="submit" value="Cadastrar" />
    </form>


    </Container>
  )
}

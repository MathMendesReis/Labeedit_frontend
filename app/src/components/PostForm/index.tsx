import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Input } from '../../pages/Main/styles';
import { Container } from './styles';

const schema = yup.object({
  content: yup.string().required('Campo obrigatório').max(280, 'O conteúdo deve ter no máximo 280 caracteres'),
}).required();

type FormData = yup.InferType<typeof schema>;

export default function CreatePost() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>

        <input type='post' {...register('content')} placeholder='Conteúdo' />
        {errors.content && <p>{errors.content.message}</p>}



        <Input className='buttonPost' type='submit' value='Publicar' />
      </form>
    </Container>
  );
}

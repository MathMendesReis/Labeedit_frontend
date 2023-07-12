import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { CardPosts } from '../../components/cardPosts';
import { Container } from './styles';
import { ContainerNewPost } from '../Posts/styles';
import ButtonCustomer from '../../components/buttonCustomer';
import { NewPosFormValues, schema } from '../Posts/validationSchemma';
import useComents from '../../services/useComents';
import { posts } from '../../interfaces/Post';
import { ComentsCards } from '../../components/ComentsCards';
import { InputCreateNewComment } from '../../interfaces/InputCreateNewComent.DTO';

function ComentsPages() {
  const { id } = useParams() as { id: string };

  const { data, isLoading, createNewComent } = useComents(id);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewPosFormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<NewPosFormValues> = ({ contents }) => {
    const token = localStorage.getItem('@token');
    if (token === null) {
      return;
    }
    const body: InputCreateNewComment = {
      id,
      token,
      contents,
    };
    createNewComent.mutate(body);
    reset();
  };
  return (
    <Container>
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        data?.map((post: posts) => (
          <CardPosts
            key={post.id}
            id={post.id}
            name_user={post.name_user}
            contents={post.contents}
            likes={post.likes}
            dislikes={post.dislikes}
            total_coments={post.total_coments}
            coments={post.coments || []}
          />
        ))
      )}
      <ContainerNewPost onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='contents'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <input
              id='contents'
              type='text'
              aria-controls='true'
              autoComplete='contents'
              placeholder='Adicionar comentário'
              {...field}
            />
          )}
        />
        {errors.contents && <p className='error'>{errors.contents.message}</p>}
        <ButtonCustomer textButton='Comentar' buttonType='submit' />
      </ContainerNewPost>
      <main>
        {data?.map((coments: posts) =>
          coments.coments?.map((coment) => (
            <ComentsCards
              key={coment.id}
              post_id={coment.id}
              name_user={coment.name_user}
              contents={coment.contents}
              likes={coment.likes}
              dislikes={coment.dislikes}
              total_coments={0}
            />
          )),
        )}
      </main>
    </Container>
  );
}

export default ComentsPages;

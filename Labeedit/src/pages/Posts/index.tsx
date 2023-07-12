import React from 'react';
import { Container, ContainerNewPost, Rotate } from './styles';
import { CardPosts } from '../../components/cardPosts';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import usePosts from '../../services/usePosts';
import { posts } from '../../interfaces/Post';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ButtonCustomer from '../../components/buttonCustomer';
import { NewPosFormValues, schema } from './validationSchemma';

function PostPages() {
  const { data, isLoading } = usePosts();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewPosFormValues>({
    resolver: yupResolver(schema),
  });
  const { createPost } = usePosts();

  const onSubmit: SubmitHandler<NewPosFormValues> = async ({ contents }: NewPosFormValues) => {
    createPost({ contents });
    reset();
  };

  return (
    <Container>
      <ContainerNewPost onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='contents'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <input
              type='text'
              id='content'
              autoComplete='contents'
              placeholder='Escreva seu post...'
              {...field}
            />
          )}
        />
        {errors.contents && <p className='error'>{errors.contents.message}</p>}

        <ButtonCustomer textButton='Postar' buttonType='submit' />
      </ContainerNewPost>
      <main>
        {isLoading ? (
          <Rotate>
            <AiOutlineLoading3Quarters />
          </Rotate>
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
              coments={[]}
            />
          ))
        )}
      </main>
    </Container>
  );
}

export default PostPages;

import { Container } from './styles';
import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import ButtonCustomer from '../../../components/CustomerButton';
import { createPost } from '../../../services/createPost';
// import { getAllPosts } from '../../../services/getAllPosts';
import { getToken } from '../../../helpers/getToken';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { useDispatch } from 'react-redux';
import { getAllPosts } from '../../../services/getAllPosts';
import CardPosts from '../../../components/cardPost';

export default function PostView() {
  const postData = useAppSelector((state) => state.postSlice.posts);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  type Inputs = {
    contents: string;
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const token = getToken();
    if (!token) {
      return;
    }
    createPost(token, data.contents, setIsLoading);
    getAllPosts(token, dispatch);
    reset();
  };
  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
    getAllPosts(token, dispatch);
    return;
  }, [isLoading]);

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea defaultValue='' {...register('contents')} placeholder='Escreva seu post...' />
        <ButtonCustomer text='Postar' isLoading={isLoading} />
      </form>
      <section>
        {postData.map((post) => (
          <CardPosts
            key={post.id}
            id={post.id}
            nameUser={post.creator.name}
            contents={post.contents}
            likes={post.likes}
            comments={post.comments}
          />
        ))}
      </section>
    </Container>
  );
}

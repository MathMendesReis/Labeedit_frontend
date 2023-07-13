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

export default function PostView() {
  const post = useAppSelector((state) => state.postSlice.posts);
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
  }, []);

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea defaultValue='' {...register('contents')} placeholder='Escreva seu post...' />
        <ButtonCustomer text='Postar' isLoading={isLoading} />
      </form>
    </Container>
  );
}

import { Container } from '../PostView/styles';
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
import { getCommentsByPostId } from '../../../services/getComentsByPostID';
import { useParams } from 'react-router-dom';
import { getPostById } from '../../../services/getPostById';
import { createComents } from '../../../services/createNewComents';

export default function ComentsView() {
  const postData = useAppSelector((state) => state.postSlice.posts);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>(); // Especifique que 'id' é uma string

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
    if (!id) {
      return;
    }
    if (data.contents === '') {
      return;
    }
    // createPost(token, data.contents, setIsLoading);
    createComents(token, data.contents, id, setIsLoading);
    getCommentsByPostId(id, token, dispatch);
    getPostById(id, token, dispatch);

    reset();
  };
  const comentsData = useAppSelector((state) => state.comentsSlice.coments);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
    if (!id) {
      return;
    }
    getCommentsByPostId(id, token, dispatch);
  }, [isLoading]);
  return (
    <Container>
      <section>
        {postData.map((post) => (
          <CardPosts
            key={post.id}
            id={post.id}
            nameUser={post.creator.name}
            contents={post.contents}
            likes={post.likes}
            coments={post.coments}
          />
        ))}
      </section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea defaultValue='' {...register('contents')} placeholder='Escreva seu post...' />
        <ButtonCustomer text='Responder' isLoading={isLoading} />
      </form>
      <section>
        {comentsData.map((coments) => (
          <CardPosts
            key={coments.id}
            id={coments.id}
            nameUser={coments.creator.name}
            contents={coments.contents}
            likes={coments.likes}
            // coments={coments.coments}
          />
        ))}
      </section>
    </Container>
  );
}

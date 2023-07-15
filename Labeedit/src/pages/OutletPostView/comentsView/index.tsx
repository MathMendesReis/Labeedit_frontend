import { Container } from '../PostView/styles';
import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import ButtonCustomer from '../../../components/CustomerButton';
import { key } from '../../../services/createPost';
import { useAppSelector } from '../../../app/hooks';
import { useDispatch } from 'react-redux';
import CardPosts from '../../../components/cardPost';
import { useParams } from 'react-router-dom';
import { createComents } from '../../../services/createNewComents';
import usePostById from '../../../components/hooks/usePostById';
import CardComents from '../../../components/cardsComents';
import { getCommentsByPostId } from '../../../services/getCommentsByPostId';
import { Post } from '../../../redux/postReducer';

export default function ComentsView() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id } = useParams() as { id: string };
  const token = localStorage.getItem(key) as string;
  const postById = usePostById(id, token);
  const dispatch = useDispatch();

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
    createComents(token, data.contents, id, dispatch);
    reset();
  };
  const comentsData = useAppSelector((state) => state.comentsSlice.coments);
  useEffect(() => {
    getCommentsByPostId(id, token, dispatch);
    postById.getPostById();
  }, []);
  return (
    <Container>
      <section>
        {postById.data.map((post: Post) => (
          <CardPosts
            key={post.id}
            post_id={post.id}
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
          <CardComents
            key={coments.id}
            coments_id={coments.id}
            nameUser={coments.creator.name}
            contents={coments.contents}
            likes={coments.likes}
          />
        ))}
      </section>
    </Container>
  );
}

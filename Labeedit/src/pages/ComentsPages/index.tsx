import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { CardPosts } from '../../components/cardPosts';
import NewComentForm from '../../components/forms/NewComentsForm';
import { useMutation } from 'react-query';
import api from '../../services/api';
import { useParams } from 'react-router-dom';
import { post } from '../../interfaces/Post';

function ComentsPages() {
  const { id } = useParams();
  const mutation = useMutation((id: string): Promise<post[]> => {
    return api.get(`/posts/${id}`);
  });

  useEffect(() => {
    if (id) {
      mutation.mutate(id);
    }
  }, []);

  const { data, isLoading, context } = mutation;
  return (
    <Container>
      {isLoading && <p>caregando...</p>}
      {data &&
        data.map((post) => (
          <CardPosts
            key={post.id}
            id={post.id}
            name_user={post.name_user}
            contents={post.contents}
            likes={post.likes}
            dislikes={post.dislikes}
            coments={1}
          />
        ))}
      <NewComentForm />
    </Container>
  );
}

export default ComentsPages;

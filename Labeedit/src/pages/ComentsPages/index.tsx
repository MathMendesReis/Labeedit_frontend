import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { CardPosts } from '../../components/cardPosts';
import NewComentForm from '../../components/forms/NewComentsForm';
import { useQuery } from 'react-query';
import api from '../../services/api';
import { useParams } from 'react-router-dom';
import { posts } from '../../interfaces/Post';

function ComentsPages() {
  const { id } = useParams() as { id: string };
  const [coments, setComents] = useState([]);

  const { data, isLoading } = useQuery(['coments', id], () => getPostsById(id));

  const getPostsById = async (id: string) => {
    const { data } = await api.get(`/posts/${id}`);
    data?.map((post: any) => {
      setComents(post.coments);
    });
    return data;
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
      <NewComentForm />
      {coments?.map((coments: any) => (
        <CardPosts
          key={coments.id}
          id={coments.id}
          name_user={coments.name_user}
          contents={coments.contents}
          likes={coments.likes}
          dislikes={0}
          total_coments={0}
          coments={[]}
        />
      ))}
    </Container>
  );
}

export default ComentsPages;

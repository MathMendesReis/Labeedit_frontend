import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { CardPosts } from '../../components/cardPosts';
import NewComentForm from '../../components/forms/NewComentsForm';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Post } from '../../interfaces/Post';
import { BASE_URL } from '../../helpers/BaseUrl';

function ComentsPages() {
  const { id } = useParams();
  const [post, setPost] = useState<null | Post>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/posts/${id}`);
        setPost(response.data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [id]);
  return (
    <Container>
      {isLoading && <p>caregando...</p>}
      {error && <p>{error}</p>}
      {post && (
        <CardPosts
          key={post.id}
          id={post.id}
          name_user={post.name_user}
          contents={post.contents}
          likes={post.likes}
          dislikes={post.dislikes}
          totalComents={post.totalComents}
          coments={post.coments}
        />
      )}
      <NewComentForm />
    </Container>
  );
}

export default ComentsPages;

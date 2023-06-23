import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { CardPosts } from '../../components/cardPosts';
import NewComentForm from '../../components/forms/NewComentsForm';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../helpers/BaseUrl';
import { Post } from '../../interfaces/Post';

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
          key={post.post_id}
          post_id={post.post_id}
          user_id={post.user_id}
          content={post.content}
          created_at_post={post.created_at_post}
          update_at_post={post.update_at_post}
          nameUser={post.nameUser}
          likes={post.likes}
          dislikes={post.dislikes}
          totalComments={post.totalComments}
        />
      )}
      <NewComentForm />
    </Container>
  );
}

export default ComentsPages;

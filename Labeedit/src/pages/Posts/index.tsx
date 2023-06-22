import React from 'react';
import { Container } from './styles';
import NewPostForm from '../../components/forms/NewpostForm';
import { CardPosts } from '../../components/cardPosts';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Post } from '../../interfaces/Post';

function PostPages() {
  const { data, isFetched } = useQuery<Post[]>(
    'posts',
    async () => {
      const response = await axios.get('http://localhost:3003/posts');
      return response.data;
    },
    {
      refetchOnWindowFocus: true,
      staleTime: 1000 * 60,
    },
  );
  console.log(data);
  return (
    <Container>
      <NewPostForm />
      {data?.map((post: Post) => (
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
      ))}
    </Container>
  );
}

export default PostPages;

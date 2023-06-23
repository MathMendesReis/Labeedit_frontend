import React from 'react';
import { Container } from './styles';
import NewPostForm from '../../components/forms/NewpostForm';
import { CardPosts } from '../../components/cardPosts';
import { Post } from '../../interfaces/Post';
import usePosts from '../../components/hooks/usePosts';

function PostPages() {
  const { response, error, isLoading } = usePosts();
  return (
    <Container>
      <NewPostForm />
      <main>
        {response
          // ?.sort((a, b) => a.created_at_post as Date - b.created_at_post)
          ?.map((post: Post) => (
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
      </main>
    </Container>
  );
}

export default PostPages;

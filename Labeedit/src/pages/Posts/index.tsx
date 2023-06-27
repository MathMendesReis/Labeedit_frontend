import React from 'react';
import { Container, Rotate } from './styles';
import NewPostForm from '../../components/forms/NewpostForm';
import { CardPosts } from '../../components/cardPosts';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import usePosts from '../../services/usePosts';
import { posts } from '../../interfaces/Post';

function PostPages() {
  const { data, isLoading } = usePosts();

  return (
    <Container>
      <NewPostForm />
      <main>
        {isLoading ? (
          <Rotate>
            <AiOutlineLoading3Quarters />
          </Rotate>
        ) : (
          data?.map((post: posts) => (
            <CardPosts
              key={post.id}
              id={post.id}
              name_user={post.name_user}
              contents={post.contents}
              likes={post.likes}
              dislikes={post.dislikes}
              coments={post.coments}
            />
          ))
        )}
      </main>
    </Container>
  );
}

export default PostPages;

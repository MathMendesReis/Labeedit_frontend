import React from 'react';
import { Container, Rotate } from './styles';
import NewPostForm from '../../components/forms/NewpostForm';
import { CardPosts } from '../../components/cardPosts';
import { Post } from '../../interfaces/Post';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function PostPages() {
  return (
    <Container>
      <NewPostForm />
      <main>
        {/* {isLoading ? (
          <Rotate>
            <AiOutlineLoading3Quarters />
          </Rotate>
        ) : (
          response
            // ?.sort((a, b) => a.created_at_post as Date - b.created_at_post)
            ?.map((post: Post) => (
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
            ))
        )} */}
      </main>
    </Container>
  );
}

export default PostPages;

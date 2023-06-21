import React from 'react';
import { Container } from './styles';
import NewPostForm from '../../components/forms/NewpostForm';
import { CardPosts } from '../../components/cardPosts';

function PostPages() {
  return (
    <Container>
      <NewPostForm />
      <CardPosts />
    </Container>
  );
}

export default PostPages;

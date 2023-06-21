import React from 'react';
import { Container } from './styles';
import { CardPosts } from '../../components/cardPosts';
import NewComentForm from '../../components/forms/NewComentsForm';

function ComentsPages() {
  return (
    <Container>
      <CardPosts />
      <NewComentForm />
      <CardPosts />
      <CardPosts />
      <CardPosts />
    </Container>
  );
}

export default ComentsPages;

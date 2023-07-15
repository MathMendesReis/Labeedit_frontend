import { Dispatch } from '@reduxjs/toolkit';
import api from './api';
import { getAllPosts } from './getAllPosts';
import usePostById from '../components/hooks/usePostById';
import { getCommentsByPostId } from './getCommentsByPostId';

export const likeDislikePost = async (
  id: string,
  token: string,
  likeValue: number,
  currentUrl: string,
  dispatch: Dispatch,
) => {
  const url = `/posts/${id}`;
  const headers = {
    Authorization: token,
  };
  const body = {
    like: likeValue,
  };

  try {
    await api.post(url, body, { headers });
    getAllPosts(token, dispatch);
    getCommentsByPostId(id, token, dispatch);
  } catch (error) {
    console.error('Erro ao realizar o Like/Dislike:', error);
  }
};

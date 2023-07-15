import { Dispatch } from '@reduxjs/toolkit';
import api from './api';
import { setComents } from '../redux/comentsReducer';

// eslint-disable-next-line prettier/prettier
export const getCommentsByPostId = async (postId: string, token: string, dispatch: Dispatch) => {
  const url = `/coments/${postId}`;

  const headers = {
    Authorization: token,
  };
  try {
    const response = await api.get(url, { headers });
    const comments = response.data;
    dispatch(setComents(comments));
    return comments;
  } catch (error) {
    console.error('Erro ao recuperar os comentários:', error);
    throw error;
  }
};

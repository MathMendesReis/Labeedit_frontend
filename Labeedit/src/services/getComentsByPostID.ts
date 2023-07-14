import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { setComents } from '../redux/comentsReducer';
import api from './api';

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
  }
};

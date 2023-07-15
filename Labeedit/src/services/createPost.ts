import { Dispatch } from '@reduxjs/toolkit';
import api from './api';
import { getAllPosts } from './getAllPosts';
export const key = '@labeedit';

export const createPost = async (token: string, contents: string, dispatch: Dispatch) => {
  const url = '/posts';
  const headers = {
    Authorization: token,
  };
  const body = {
    contents,
  };

  try {
    const response = await api.post(url, body, { headers });
    getAllPosts(token, dispatch);
  } catch (error) {
    console.error('Erro ao criar o post:', error);
  }
};

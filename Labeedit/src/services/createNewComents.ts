import api from './api';
export const key = '@labeedit';
import { Dispatch } from 'redux';
import { getCommentsByPostId } from './getCommentsByPostId';

export const createComents = async (
  token: string,
  contents: string,
  post_id: string,
  dispatch: Dispatch,
) => {
  const url = `/coments/${post_id}`;
  const headers = {
    Authorization: token,
  };
  const body = {
    contents,
  };

  try {
    await api.post(url, body, { headers });
    getCommentsByPostId(post_id, token, dispatch);
  } catch (error) {
    console.error('Erro ao criar o post:', error);
  }
};

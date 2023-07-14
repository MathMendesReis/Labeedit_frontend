import { setPosts } from '../redux/postReducer';
import api from './api';
import { Dispatch } from 'redux';

export const getAllPosts = async (token: string, dispatch: Dispatch): Promise<void> => {
  const headers = {
    Authorization: token,
  };

  try {
    const response = await api.get('/posts', { headers });
    const posts = response.data;
    dispatch(setPosts(posts));
  } catch (error) {
    console.error('Erro ao recuperar os posts:', error);
  }
  return;
};

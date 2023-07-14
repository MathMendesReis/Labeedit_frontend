import { setPosts } from '../redux/postReducer';
import api from './api';
import { Dispatch } from 'redux';

export const getPostById = async (id: string, token: string, dispatch: Dispatch): Promise<void> => {
  const headers = {
    Authorization: token,
  };

  try {
    const response = await api.get(`/posts/${id}`, { headers });
    const posts = response.data;
    console.log(posts);
    dispatch(setPosts(posts));
  } catch (error) {
    console.error('Erro ao recuperar os posts:', error);
  }
  return;
};

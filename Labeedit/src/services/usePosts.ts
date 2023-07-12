import { useQuery, useMutation } from 'react-query';
import api from './api';
import { queryClient } from './queryClient';
import { LikeDislike } from '../interfaces/LikeDislike';
import { posts } from '../interfaces/Post';
import { NewPosFormValues } from '../pages/Posts/validationSchemma';

export default function usePosts() {
  const token = localStorage.getItem('@token');

  const getPosts = async (): Promise<posts[]> => {
    const { data } = await api.get('/posts');
    return data;
  };
  const { data, isLoading, isError } = useQuery('posts', getPosts);

  const getPostsById = async (id: string) => {
    const { data } = await api.get(`/posts/:${id}`);
    return data;
  };

  const createPost = async ({ contents }: NewPosFormValues) => {
    const body = {
      token,
      contents,
    };
    const { data } = await api.post('/posts/createpost', body);
    return data;
  };

  const likeDislike = async ({ id, like }: LikeDislike) => {
    const body = {
      token,
      post_id: id,
      like,
    };
    const { data } = await api.post('/like', body);
    return data;
  };
  const likeDislikeComents = async ({ id, like }: LikeDislike) => {
    const body = {
      token,
      post_id: id,
      like,
    };
    const { data } = await api.post('/likesComents', body);
    return data;
  };

  const createPostPostMutation = useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    },
  });

  const likeDislikeMutation = useMutation(likeDislike, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    },
  });
  const getPostsByIdMutation = useMutation(getPostsById, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    },
  });

  return {
    data,
    isLoading,
    isError,
    createPost: createPostPostMutation.mutate,
    likeDislike: likeDislikeMutation.mutate,
    getPostsById: getPostsByIdMutation.mutate,
  };
}

import { useMutation, useQuery } from 'react-query';
import api from './api';
import { queryClient } from './queryClient';
import { InputCreateNewComment } from '../interfaces/InputCreateNewComent.DTO';
import { InputLikeDislikeComents } from '../interfaces/InputLikeDislikeComents';

export default function useComents(id: string) {
  const getPostsById = async (id: string) => {
    const { data } = await api.get(`/posts/${id}`);
    return data;
  };
  const { data, isLoading, isError, refetch } = useQuery(['comments', id], () => getPostsById(id));

  const createNewComment = async (inṕut: InputCreateNewComment) => {
    const { data } = await api.post('/coments', inṕut);
    return data;
  };

  const createNewCommentMutation = useMutation(createNewComment, {
    onSuccess: () => {
      queryClient.invalidateQueries('comments');
    },
  });

  const like = async (input: InputLikeDislikeComents) => {
    const { data } = await api.post('/likesComents', input);
    return data;
  };

  const likeMutation = useMutation(like, {
    onSuccess: () => {
      queryClient.invalidateQueries('comments');
    },
  });

  return {
    data,
    isLoading,
    isError,
    refetch,
    createNewComent: createNewCommentMutation,
    like: likeMutation,
  };
}

import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Post } from '../../redux/postReducer';

const usePostById = (id: string, token: string) => {
  const [data, setData] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const getPostById = async () => {
    const headers = {
      Authorization: token,
    };
    setIsLoading(true);
    try {
      const response = await api.get(`/posts/${id}`, { headers });
      setData(response.data);
      setIsLoading(false);
      console.log(true);
    } catch (error) {
      console.error('Erro ao recuperar os posts:', error);
      setIsLoading(false);
      console.log(true);
    }
    return;
  };
  useEffect(() => {
    getPostById();
  }, [id, token, isLoading]);

  return { isLoading, data, getPostById };
};

export default usePostById;

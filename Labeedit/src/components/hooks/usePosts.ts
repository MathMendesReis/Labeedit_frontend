/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../helpers/BaseUrl';
import { Error } from '../../interfaces/Error';
import { useNavigate } from 'react-router-dom';
import { Post } from '../../interfaces/Post';
import { NewPosFormValues } from '../forms/NewpostForm/validationSchemma';
import { keyLocalStorage } from './UseLogin';

const usePosts = () => {
  const [response, setResponse] = useState<null | Post[]>(null);
  const [uniquePost, setUniquePost] = useState<Post>();
  const [error, setError] = useState<null | Error>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const getAllPosts = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/posts`);
      setResponse(response.data);
    } catch (err: any) {
      setError(err.response.data);
    } finally {
      setIsLoading(false);
    }
  };

  const createNewPost = async (data: NewPosFormValues) => {
    try {
      const body = {
        ...data,
        token: localStorage.getItem(keyLocalStorage),
      };
      await axios.post(`${BASE_URL}/posts`, body);
      window.location.reload();
    } catch (err: any) {
      setError(err.response.data);
    }
  };

  const getPostById = async (id: string) => {
    const response = await axios.get(`${BASE_URL}/posts/${id}`);
    if (response) {
      setUniquePost(response.data);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return { response, error, isLoading, createNewPost, getAllPosts, getPostById, uniquePost };
};

export default usePosts;

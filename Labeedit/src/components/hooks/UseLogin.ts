/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FormValuesLogin } from '../forms/LoginForm/validationSchemma';
import { BASE_URL } from '../../helpers/BaseUrl';
import { Error } from '../../interfaces/Error';
import { useNavigate } from 'react-router-dom';

export const keyLocalStorage = '@token';
export const storeTokenOnLocalStorage = (data: string) => {
  localStorage.setItem(keyLocalStorage, data);
};

const useLogin = (initialValues: FormValuesLogin) => {
  const [response, setResponse] = useState<null | string>(null);
  const [error, setError] = useState<null | Error>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const login = async () => {
      setIsLoading(true);
      try {
        const { email, password } = initialValues;
        const body = { email, password };
        const response = await axios.post(`${BASE_URL}/users/login`, body);
        const { token } = response.data;
        setResponse(token);
        storeTokenOnLocalStorage(token);
        if (token) {
          setIsAuthorized(true);
          navigate('posts');
        }
        if (response !== null) {
          setError(null);
        }
      } catch (err: any) {
        setError(err.response.data);
      } finally {
        setIsLoading(false);
      }
    };

    if (initialValues.email && initialValues.password) {
      login();
    }
  }, [initialValues]);

  return { response, error, isLoading, setError };
};

export default useLogin;

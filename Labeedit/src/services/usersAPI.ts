import { useMutation } from 'react-query';
import api from './api';
import { FormValuesLogin } from '../pages/Main/validationSchemma';
import { FormValuesRegister } from '../pages/CreateAccount/validationSchemma';

export default function usersAPi() {
  const login = useMutation({
    mutationFn: (FormData: FormValuesLogin) => {
      return api.post('/users/login', FormData);
    },
  });

  const createAccount = useMutation({
    mutationFn: (formData: FormValuesRegister) => {
      const body = {
        name: formData.apelido,
        email: formData.email,
        password: formData.password,
        accept_terms: formData.acceptTerms,
      };
      return api.post('/users/createAccount', body);
    },
  });

  return { login, createAccount };
}

import { useMutation } from 'react-query';
import api from './api';
import { FormValuesLogin } from '../components/forms/LoginForm/validationSchemma';

// export default function useLogin(FormData: FormData) {
//   return useMutation('posts', async () => {
//     const { data } = await api.post('/users/login', FormData);
//     return data;
//   });
// }

export default function useLogin() {
  const mutation = useMutation({
    mutationFn: (FormData: FormData) => {
      return api.post('/users/login', FormData);
    },
  });
}

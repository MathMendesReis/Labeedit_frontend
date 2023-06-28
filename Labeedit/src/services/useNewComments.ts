import { useMutation } from 'react-query';
import api from './api';
import { NewPosFormValues } from '../components/forms/NewpostForm/validationSchemma';

export default function newComent() {
  const mutation = useMutation({
    mutationFn: (FormData: NewPosFormValues) => {
      return api.post('/users/login', FormData);
    },
  });
}

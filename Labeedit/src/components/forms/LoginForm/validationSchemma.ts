import * as yup from 'yup';
export const schema = yup
  .object({
    email: yup.string().required('O email é obrigatório.').email('O email deve ser válido.'),
    password: yup.string().required('A senha e obrigatória'),
  })
  .required();

export type FormValuesLogin = yup.InferType<typeof schema>;

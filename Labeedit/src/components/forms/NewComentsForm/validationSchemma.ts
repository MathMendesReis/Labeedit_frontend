import * as yup from 'yup';
export const schema = yup
  .object({
    content: yup.string().required('O email é obrigatório.').email('O email deve ser válido.'),
  })
  .required();

export type NewPosFormValues = yup.InferType<typeof schema>;

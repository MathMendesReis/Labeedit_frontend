import * as yup from 'yup';
export const schema = yup
  .object({
    content: yup.string().required('Necessario inserir um texto'),
  })
  .required();

export type NewPosFormValues = yup.InferType<typeof schema>;

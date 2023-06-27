import * as yup from 'yup';
export const schema = yup
  .object({
    contents: yup.string().required('Necessario inserir um texto'),
  })
  .required();

export type NewPosFormValues = yup.InferType<typeof schema>;

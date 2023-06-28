import * as yup from 'yup';
export const schema = yup
  .object({
    contents: yup.string().required('Campo é obrigatório.'),
  })
  .required();

export type NewPosFormValues = yup.InferType<typeof schema>;

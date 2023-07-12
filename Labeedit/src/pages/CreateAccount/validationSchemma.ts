import * as yup from 'yup';
export const schema = yup
  .object({
    apelido: yup.string().required('O apelido e obrigatório'),
    email: yup.string().required('O email é obrigatório.').email('O email deve ser válido.'),
    password: yup.string().required('A senha e obrigatória'),
    acceptTerms: yup.string().required('Marque a caixinha de termo.'),
  })
  .required();

export type FormValuesRegister = yup.InferType<typeof schema>;

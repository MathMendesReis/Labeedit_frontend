import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ButtonCustomer from '../../buttonCustomer';
import { NewPosFormValues, schema } from './validationSchemma';
import { ContainerNewPost } from '../NewpostForm/styles';
import { useMutation } from 'react-query';
import api from '../../../services/api';
import { useParams } from 'react-router-dom';
import { queryClient } from '../../../services/queryClient';

export default function NewComentForm() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewPosFormValues>({
    resolver: yupResolver(schema),
  });
  const { id } = useParams() as { id: string };

  const mutation = useMutation(
    (formData: NewPosFormValues) => {
      return api.post('/coments', formData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('coments');
      },
    },
  );

  const onSubmit: SubmitHandler<NewPosFormValues> = ({ contents }) => {
    const token = localStorage.getItem('@token');
    const body = {
      id,
      token,
      contents,
    };
    mutation.mutate(body);
    reset();
  };

  return (
    <ContainerNewPost onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='contents'
        control={control}
        defaultValue=''
        render={({ field }) => (
          <input
            type='text'
            id='contents'
            autoComplete='contents'
            placeholder='Adicionar comentário'
            {...field}
          />
        )}
      />
      {errors.contents && <p className='error'>{errors.contents.message}</p>}

      <ButtonCustomer textButton='Comentar' buttonType='submit' />
    </ContainerNewPost>
  );
}

import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ButtonCustomer from '../../buttonCustomer';
import { NewPosFormValues, schema } from './validationSchemma';
import { ContainerNewPost } from '../NewpostForm/styles';

export default function NewComentForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<NewPosFormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<NewPosFormValues> = (data) => {
    console.log(data);
  };

  return (
    <ContainerNewPost onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='content'
        control={control}
        render={({ field }) => (
          <input
            type='text'
            id='content'
            autoComplete='content'
            placeholder='Adicionar comentário'
            {...field}
          />
        )}
      />
      {errors.content && <p className='error'>{errors.content.message}</p>}

      <ButtonCustomer textButton='Comentar' buttonType='submit' />
    </ContainerNewPost>
  );
}

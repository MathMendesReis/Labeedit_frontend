import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ButtonCustomer from '../../buttonCustomer';
import { NewPosFormValues, schema } from './validationSchemma';
import { ContainerNewPost } from './styles';
import usePosts from '../../../services/usePosts';

export default function NewPostForm() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewPosFormValues>({
    resolver: yupResolver(schema),
  });
  const { createPost } = usePosts();

  const onSubmit: SubmitHandler<NewPosFormValues> = async ({ contents }: NewPosFormValues) => {
    createPost({ contents });
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
            id='content'
            autoComplete='contents'
            placeholder='Escreva seu post...'
            {...field}
          />
        )}
      />
      {errors.contents && <p className='error'>{errors.contents.message}</p>}

      <ButtonCustomer textButton='Postar' buttonType='submit' />
    </ContainerNewPost>
  );
}

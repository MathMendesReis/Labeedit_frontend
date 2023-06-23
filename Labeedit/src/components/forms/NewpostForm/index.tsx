import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ButtonCustomer from '../../buttonCustomer';
import { NewPosFormValues, schema } from './validationSchemma';
import { ContainerNewPost } from './styles';
import usePosts from '../../hooks/usePosts';

export default function NewPostForm() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewPosFormValues>({
    resolver: yupResolver(schema),
  });
  const { response, error, isLoading, createNewPost, getAllPosts } = usePosts();

  const onSubmit: SubmitHandler<NewPosFormValues> = async (data) => {
    try {
      await createNewPost(data);
      reset();
      getAllPosts();
    } catch (error) {
      console.error('Erro ao criar o post:', error);
    }
  };

  return (
    <ContainerNewPost onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='content'
        control={control}
        defaultValue=''
        render={({ field }) => (
          <input
            type='text'
            id='content'
            autoComplete='content'
            placeholder='Escreva seu post...'
            {...field}
          />
        )}
      />
      {errors.content && <p className='error'>{errors.content.message}</p>}

      <ButtonCustomer textButton='Postar' buttonType='submit' />
    </ContainerNewPost>
  );
}

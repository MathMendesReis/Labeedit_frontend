import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ButtonCustomer from '../../buttonCustomer';
import { NewPosFormValues, schema } from './validationSchemma';
import { ContainerNewPost } from './styles';

export default function NewPostForm() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewPosFormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<NewPosFormValues> = async (data) => {
    console.log(data);
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

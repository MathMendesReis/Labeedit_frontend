import React from 'react';
import { ContainerButtonCustomer } from './styles';

type buttonProps = {
  textButton: string;
  buttonType?: 'button' | 'submit' | 'reset';
};

export default function ButtonCustomer({ textButton, buttonType }: buttonProps) {
  return <ContainerButtonCustomer type={buttonType}>{textButton}</ContainerButtonCustomer>;
}

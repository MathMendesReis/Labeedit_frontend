import React from 'react';
import { ContainerButtonCustomer } from './styles';

type buttonProps = {
  textButton: string;
  buttonType?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};

export default function ButtonCustomer({ textButton, buttonType }: buttonProps) {
  return (
    <ContainerButtonCustomer onClick={onclick as (() => void) | undefined} type={buttonType}>
      {textButton}
    </ContainerButtonCustomer>
  );
}

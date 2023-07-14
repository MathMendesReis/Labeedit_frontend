import React from 'react';
import { Container } from './styled';

interface propsButton {
  text: string;
  isLoading?: boolean;
}
export default function ButtonCustomer({ text, isLoading }: propsButton) {
  return <Container>{isLoading ? <div className='custom-loader'></div> : text}</Container>;
}

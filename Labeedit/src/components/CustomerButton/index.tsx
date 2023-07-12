import React from 'react';
import { Container } from './styled';

interface propsButton {
  text: string;
}
export default function ButtonCustomer({ text }: propsButton) {
  return <Container>{text}</Container>;
}

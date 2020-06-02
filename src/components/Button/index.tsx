import React from 'react';

import { Container } from './styles';
import { ButtonProps } from './ButtonProps';

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;

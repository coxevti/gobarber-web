import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';
import { InputProps } from './InputProps';

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input ref={inputRef} defaultValue={defaultValue} {...rest} />
    </Container>
  );
};

export default Input;

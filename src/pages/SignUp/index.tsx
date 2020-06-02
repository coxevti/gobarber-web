import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from 'utils/getValidationErrors';

import { FiMail, FiLock, FiArrowLeft, FiUser } from 'react-icons/fi';
import logoImg from 'assets/logo.svg';

import Button from 'components/Button';
import Input from 'components/Input';

import { FormHandles } from '@unform/core';
import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('E-mail obrigatório'),
        password: Yup.string().min(8, 'No mínimo 8 digitos'),
      });
      await schema.validate(data, { abortEarly: false });
    } catch (error) {
      const errors = getValidationErrors(error);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber Logo" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
          <Input name="email" icon={FiMail} type="email" placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="register">
          <FiArrowLeft />
          voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;

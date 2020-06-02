import React from 'react';

import { FiMail, FiLock, FiArrowLeft, FiUser } from 'react-icons/fi';
import logoImg from 'assets/logo.svg';

import Button from 'components/Button';
import Input from 'components/Input';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="GoBarber Logo" />
      <form>
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
      </form>
      <a href="register">
        <FiArrowLeft />
        voltar para logon
      </a>
    </Content>
  </Container>
);

export default SignUp;

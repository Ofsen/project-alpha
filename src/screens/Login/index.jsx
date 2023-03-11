import React from 'react';
import styled from 'styled-components';
import LoginForm from '../../components/Forms/LoginForm';

const Container = styled.View`
  flex: 1;
  background: #010814;
  align-items: center;
  justify-content: center;
`;

const TextHeader = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;

const Login = () => {
  return (
    <Container>
      <TextHeader>Log in</TextHeader>
      <LoginForm />
    </Container>
  );
};

export default Login;

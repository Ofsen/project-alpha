import React from 'react';
import styled from 'styled-components';
import SignInForm from '../../components/Forms/SignInForm';

const Signin = () => {
  return (
    <Container>
      <TextHeader>Sign In</TextHeader>
      <SignInForm />
    </Container>
  );
};

export default Signin;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const TextHeader = styled.Text`
  font-size: 32px;
  color: black;
  font-weight: 900;
`;

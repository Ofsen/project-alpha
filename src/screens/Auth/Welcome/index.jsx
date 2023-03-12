import React from 'react';
import styled from 'styled-components';
import {Button} from '../../../components/Button';

const Welcome = ({navigation}) => {
  return (
    <Container>
      <TextHeader>Welcome!</TextHeader>
      <CenteredText>
        Log in or sign up and get access to the best plans on what to do in
        Paris!
      </CenteredText>
      <ButtonContainer>
        <Button
          label="Log In"
          pressHandler={() => navigation.navigate('Login')}
        />
        <Button
          label="Sign Up"
          pressHandler={() => navigation.navigate('Signup')}
        />
      </ButtonContainer>
    </Container>
  );
};

export default Welcome;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const TextHeader = styled.Text`
  font-size: 40px;
  font-weight: 900;
  color: ${({theme}) => theme.color};
`;

const CenteredText = styled.Text`
  text-align: center;
  padding: 0 32px;
`;

const ButtonContainer = styled.View`
  padding: 32px;
  width: 100%;
  gap: 16px;
`;

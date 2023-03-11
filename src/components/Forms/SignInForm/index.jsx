import axios from 'axios';
import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';
import {Button} from '../../Button';
import TextField from '../TextField';
import {useNavigation, Link} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGIN_API} from '../../../config/defaultValues';
import {useAuth} from '../../../contexts/authContext';

const SignInForm = () => {
  const {Login} = useAuth();
  const [form, setForm] = React.useState({username: '', password: ''});

  const handleLogin = () => {
    if (form.username.length < 3 || form.password.length < 8) {
      return alert('Invalid username or password');
    }
    Login(form);
  };

  return (
    <FormContainer>
      <TextField
        label="Username"
        placeholder="user123"
        keyboardType="email-address"
        change={text => setForm(prev => ({...prev, username: text}))}
        value={form.username}
      />
      <TextField
        label="Password"
        placeholder="***"
        type="password"
        change={text => setForm(prev => ({...prev, password: text}))}
        value={form.password}
      />
      <View style={{marginTop: 12}}>
        <Button label="Sign in" pressHandler={handleLogin} />
      </View>
      <WhiteText>
        Already signed up ?{' '}
        <Link
          style={{textDecorationLine: 'underline', color: '#0e4faf'}}
          to={'/Login'}>
          log in
        </Link>
      </WhiteText>
    </FormContainer>
  );
};

export default SignInForm;

const FormContainer = styled.View`
  width: 70%;
  margin-top: 16px;
  gap: 16px;
`;

const WhiteText = styled.Text`
  text-align: center;
  margin-top: 16px;
`;

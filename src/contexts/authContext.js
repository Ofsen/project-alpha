import React from 'react';
import axios from 'axios';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGGED_API, LOGIN_API} from '../config/defaultValues';

const authContextInitialValues = {
  logged: false,
  Login: () => {},
  Logout: () => {},
  checkUserLoggedIn: () => {},
};

export const AuthContext = createContext(authContextInitialValues);

export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthProvider(props) {
  const {children} = props;
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUserLoggedIn();
    setLoading(false);
  }, [logged]);

  const Login = data => {
    axios
      .post(LOGIN_API, data)
      .then(res => {
        if (
          res.data.details === 'user connected' &&
          res.headers['x-access-token']
        ) {
          AsyncStorage.setItem('token', res.headers['x-access-token'])
            .then(() => {
              setLogged(true);
            })
            .catch(err => alert(err));
        }
      })
      .catch(err => {
        alert(JSON.stringify(err));
      });
  };

  const Logout = () => {
    AsyncStorage.removeItem('token')
      .then(() => {
        setLogged(false);
      })
      .catch(err => alert(err));
  };

  const checkUserLoggedIn = async () => {
    setLoading(true);
    const token = await AsyncStorage.getItem('token');

    if (token !== null) {
      const request = await axios.get(LOGGED_API, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (request.data?.details === 'protected route reached') {
        setLogged(true);
      }
    }
  };

  const value = {
    logged: logged,
    Login: Login,
    Logout: Logout,
    checkUserLoggedIn: checkUserLoggedIn,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? (
        <Container>
          <ActivityIndicator size="large" color="#64748b" />
        </Container>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

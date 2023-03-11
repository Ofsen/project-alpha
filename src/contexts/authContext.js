import React from 'react';
import axios from 'axios';
import {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGGED_API, LOGIN_API} from '../config/defaultValues';

const authContextInitialValues = {
  logged: false,
  Login: () => {},
};

export const AuthContext = createContext(authContextInitialValues);

export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthProvider(props) {
  const {children} = props;
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    if (!logged) {
      checkUserLoggedIn();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const checkUserLoggedIn = async () => {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      const request = await axios.get(LOGGED_API, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (request.details) {
        setLogged(true);
      }
    }
  };

  const value = {
    logged: logged,
    Login: Login,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

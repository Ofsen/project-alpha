import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styled from 'styled-components/native';
import {useAuth} from '../contexts/authContext';
// Screens
import Login from '../screens/Login';
import Signin from '../screens/Signin';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

// removing the background color from the navigation container
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

export const Routes = () => {
  const {logged} = useAuth();

  return (
    <GlobalSafeArea>
      <NavigationContainer theme={theme}>
        <Stack.Navigator initialRouteName="Home">
          {logged ? (
            <>
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="Home"
                component={Home}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="Login"
                component={Login}
              />
              <Stack.Screen
                options={{
                  title: 'Sign In',
                }}
                name="Signin"
                component={Signin}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalSafeArea>
  );
};

const GlobalSafeArea = styled.SafeAreaView`
  flex: 1;

  background-color: ${({theme}) => theme.background};
`;

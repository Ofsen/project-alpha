import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styled from 'styled-components/native';
import {useAuth} from '../contexts/authContext';
// Screens
import Login from '../screens/Login';
import Signin from '../screens/Signin';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

export const Routes = () => {
  const {logged} = useAuth();

  return (
    <GlobalSafeArea>
      <NavigationContainer>
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
              <Stack.Screen name="Signin" component={Signin} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalSafeArea>
  );
};

const GlobalSafeArea = styled.SafeAreaView`
  flex: 1;
`;

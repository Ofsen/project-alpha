import React, {createContext, useContext, useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useToast} from 'react-native-toast-notifications';

const authContextInitialValues = {
  currentUser: undefined,
  Login: () => {},
  Signup: () => {},
  Logout: () => {},
};

export const AuthContext = createContext(authContextInitialValues);

export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthProvider(props) {
  const {children} = props;
  const toast = useToast();
  const [currentUserState, setCurrentUserState] = useState();

  useEffect(() => {
    const unsubscribeFromAuthStateChanged = auth().onAuthStateChanged(
      loggedUser => {
        if (loggedUser) {
          setCurrentUserState(loggedUser);
        } else {
          setCurrentUserState(undefined);
        }
      },
    );

    return unsubscribeFromAuthStateChanged;
  }, []);

  const Signup = async (email, password) =>
    await auth().createUserWithEmailAndPassword(email, password);

  const Login = async (email, password) =>
    await auth().signInWithEmailAndPassword(email, password);

  const Logout = async () => {
    try {
      await auth().signOut();
    } catch (err) {
      toast.show(err.message, {type: 'warning'});
    }
  };

  const value = {
    currentUser: currentUserState,
    Signup: Signup,
    Login: Login,
    Logout: Logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

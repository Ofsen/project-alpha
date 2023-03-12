import React, {createContext, useContext, useEffect, useState} from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {auth} from '../config/firebase';

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
  const [currentUserState, setCurrentUserState] = useState();

  useEffect(() => {
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(
      auth,
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
    await createUserWithEmailAndPassword(auth, email, password);

  const Login = async (email, password) =>
    await signInWithEmailAndPassword(auth, email, password);

  const Logout = () => signOut(auth);

  const value = {
    currentUser: currentUserState,
    Signup: Signup,
    Login: Login,
    Logout: Logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

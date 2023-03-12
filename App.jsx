import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {MainRoutes} from './src/config/MainRoutes';
import {AuthProvider} from './src/contexts/authContext';
import {ThemeProvider} from 'styled-components';
import {darkTheme, lightTheme} from './src/config/theme';
import {ToastProvider} from 'react-native-toast-notifications';
import Icon from 'react-native-vector-icons/Ionicons';

const App = () => {
  // TODO: theme context
  const [theme, setTheme] = useState('light');

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <AuthProvider>
        <StatusBar
          animated={true}
          barStyle={theme === 'light' ? 'light-content' : 'dark-content'}
          backgroundColor={
            theme === 'light' ? lightTheme.statusBar : darkTheme.statusBar
          }
          hidden={false}
        />
        <ToastProvider
          duration={2000}
          successIcon={<Icon name="md-information" size={20} />}
          warningIcon={<Icon name="md-information-circle-outline" size={20} />}
          dangerIcon={<Icon name="md-information-circle" size={20} />}>
          <MainRoutes />
        </ToastProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;

import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {Routes} from './src/config/routes';
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
      <StatusBar
        animated={true}
        barStyle={theme === 'light' ? 'light-content' : 'dark-content'}
        backgroundColor={
          theme === 'light' ? lightTheme.statusBar : darkTheme.statusBar
        }
        hidden={false}
      />
      <AuthProvider>
        <ToastProvider
          duration={2000}
          successIcon={<Icon name="md-thumbs-up" size={20} />}
          dangerIcon={<Icon name="md-thumbs-down" size={20} />}
          warningIcon={<Icon name="warning" size={20} />}>
          <Routes />
        </ToastProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;

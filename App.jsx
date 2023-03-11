import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {Routes} from './src/config/routes';
import {AuthProvider} from './src/contexts/authContext';
import {ThemeProvider} from 'styled-components';
import {darkTheme, lightTheme} from './src/config/theme';

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
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;

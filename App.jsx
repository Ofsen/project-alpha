import React from 'react';
import {Routes} from './src/config/routes';
import {AuthProvider} from './src/contexts/authContext';
import {ThemeProvider} from 'styled-components';
import theme from './src/config/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;

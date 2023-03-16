import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {MainRoutes} from './src/config/MainRoutes';
import {AuthProvider} from './src/contexts/authContext';
import {ThemeProvider} from 'styled-components';
import {darkTheme, lightTheme} from './src/config/theme';
import {ToastProvider} from 'react-native-toast-notifications';
import Icon from 'react-native-vector-icons/Ionicons';
import notifee, {EventType} from '@notifee/react-native';

const App = () => {
  // TODO: theme context
  const [theme, setTheme] = useState('light');

  const [loading, setLoading] = useState(true);

  // Bootstrap sequence function
  const bootstrap = async () => {
    const initialNotification = await notifee.getInitialNotification();

    if (initialNotification) {
      console.log(
        'Notification caused application to open',
        initialNotification.notification,
      );
      console.log(
        'Press action used to open the app',
        initialNotification.pressAction,
      );
    }
  };

  React.useEffect(() => {
    bootstrap()
      .then(() => setLoading(false))
      .catch(console.error);
    return () => {
      notifee.onForegroundEvent(({type, detail}) => {
        switch (type) {
          case EventType.DISMISSED:
            console.log('User dismissed notification', detail.notification);
            break;
          case EventType.PRESS:
            console.log('User pressed notification', detail.notification);
            break;
        }
      });
    };
  }, []);

  if (loading) {
    return null;
  }

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

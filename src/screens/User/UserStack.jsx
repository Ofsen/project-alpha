import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons';
import {useTheme} from 'styled-components';
// Screens
import Profile from './Profile';
import HomeStack from './Home/HomeStack';
import Favorites from './Favorites';

const Tab = createBottomTabNavigator();

const UserStack = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Favorites':
              iconName = focused ? 'ios-heart' : 'ios-heart-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            default:
              break;
          }

          return <Icons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default UserStack;

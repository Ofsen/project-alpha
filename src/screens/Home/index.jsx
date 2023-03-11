import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {useAuth} from '../../contexts/authContext';

const Home = () => {
  const {Logout} = useAuth();
  return (
    <View>
      <Text>Home</Text>
      <Pressable onPress={() => Logout()}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};

export default Home;

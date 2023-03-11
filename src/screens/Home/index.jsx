import React, {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {useToast} from 'react-native-toast-notifications';
import {useAuth} from '../../contexts/authContext';

const Home = () => {
  const {Logout} = useAuth();
  const toast = useToast();

  useEffect(() => {
    toast.show('Hello World');
    toast.show('Hello World', {type: 'danger'});
    toast.show('Hello World', {type: 'success'});
    toast.show('Hello World', {type: 'warning'});
  }, []);

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

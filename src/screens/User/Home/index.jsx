import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {FlatList, Text} from 'react-native';
import {UserLayout} from '../../../components/layout/UserLayout';
import {useToast} from 'react-native-toast-notifications';
import {DATA_API} from '@env';

const Home = () => {
  const toast = useToast();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  const size = 20;

  const fetchData = () => {
    axios
      .get(`${DATA_API}`, {
        params: {
          limit: size,
          offset: page * size,
          timezone: 'Europe/Paris',
        },
      })
      .then(res => {
        if (res.data) {
          setData(prev => [...prev, ...res.data.records]);
          setPage(prev => prev + 1);
        }
      })
      .catch(err => {
        toast.show(err, {type: 'warning'});
      });
  };

  useEffect(() => {
    if (page === 0) {
      fetchData();
    }
  }, []);

  return (
    <UserLayout title="Home">
      <FlatList
        data={data}
        initialNumToRender={size}
        renderItem={({item}) => <Text>{item.record.fields.title}</Text>}
        keyExtractor={item => item.record.id}
        onEndThreshold={10}
        onEndReached={() => {
          fetchData();
        }}
      />
    </UserLayout>
  );
};

export default Home;

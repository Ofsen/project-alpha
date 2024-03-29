import React, {useEffect, useState} from 'react';
import styled, {useTheme} from 'styled-components';
import {ActivityIndicator, FlatList} from 'react-native';
import {UserLayout} from '../../../../components/layout/UserLayout';
import {useToast} from 'react-native-toast-notifications';
import {getPaginatedEvents} from '../../../../services/events';
import {Event} from '../../../../components/Event';
import {useFocusEffect} from '@react-navigation/native';

const EventList = () => {
  const toast = useToast();
  const theme = useTheme();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const size = 5;

  const fetchData = async () => {
    try {
      const res = await getPaginatedEvents(size, page);
      if (res.status === 200) {
        setData(prev => [...prev, ...res.data.records]);
      }
    } catch (err) {
      toast.show(err.message, {type: 'warning'});
    }
    if (page === 0) setLoading(false);
  };

  const refreshData = async () => {
    setRefreshing(true);
    setData([]);
    setRefreshing(false);
    setPage(0);
  };

  useFocusEffect(
    React.useCallback(() => {
      setData([]);
      setLoading(true);
      setPage(0);
    }, []),
  );

  React.useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <UserLayout title="Accueil">
      {loading ? (
        <Centered>
          <ActivityIndicator size="large" color={theme.primary} />
        </Centered>
      ) : (
        <List
          data={data}
          initialNumToRender={size}
          renderItem={({item}) => (
            <Event
              id={item.record.id}
              title={item.record.fields.title}
              leadText={item.record.fields.lead_text}
              dateStart={item.record.fields.date_start}
              dateEnd={item.record.fields.date_end}
              coverUrl={item.record.fields.cover_url}
              tags={item.record.fields.tags}
            />
          )}
          keyExtractor={item => item.record.id}
          onEndReachedThreshold={(size * 2) / 3}
          onEndReached={() => {
            setPage(prev => page + 1);
          }}
          onRefresh={() => {
            refreshData();
          }}
          refreshing={refreshing}
          ListEmptyComponent={() =>
            !refreshing && (
              <Centered>
                <Text>Aucun evenement trouvé</Text>
              </Centered>
            )
          }
          ListFooterComponent={() => {
            if (data.length > 0) {
              return (
                <Centered>
                  <ActivityIndicator size="large" color={theme.primary} />
                </Centered>
              );
            }
            return null;
          }}
        />
      )}
    </UserLayout>
  );
};

export default EventList;

const List = styled.FlatList`
  padding: 0 16px;
`;

const Centered = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  color: ${({theme}) => theme.color};
`;

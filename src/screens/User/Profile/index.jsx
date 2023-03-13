import React from 'react';
import {useAuth} from '../../../contexts/authContext';
import TextField from '../../../components/Forms/TextField';
import {Button} from '../../../components/Button';
import {UserLayout} from '../../../components/layout/UserLayout';
import styled from 'styled-components';

const Profile = () => {
  const {Logout, currentUser} = useAuth();

  return (
    <UserLayout title="Profile">
      <ContentContainer>
        <TextField label="Email" value={currentUser.email} disabled />
        <Button variant="tint" label="Logout" onPress={() => Logout()} />
      </ContentContainer>
    </UserLayout>
  );
};

export default Profile;

const ContentContainer = styled.View`
  flex: 1;
  padding: 0 16px;
  gap: 16px;
`;

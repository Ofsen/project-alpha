import React from 'react';
import {useAuth} from '../../../contexts/authContext';
import TextField from '../../../components/Forms/TextField';
import {Button} from '../../../components/Button';
import {UserLayout} from '../../../components/layout/UserLayout';

const Profile = () => {
  const {Logout, currentUser} = useAuth();

  return (
    <UserLayout title="Profile">
      <TextField label="Email" value={currentUser.email} disabled />
      <Button variant="tint" label="Logout" onPress={() => Logout()} />
    </UserLayout>
  );
};

export default Profile;

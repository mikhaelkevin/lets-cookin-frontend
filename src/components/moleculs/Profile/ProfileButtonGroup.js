import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProfileButton from '../../atomics/Profile/ProfileButton';
import { doLogout } from '../../../redux/features/authSlice';

function ProfileButtonGroup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(doLogout());
    navigate('/login');
  };

  return (
    <>
      <ProfileButton textOption="Edit Profile" variant="warning" clickOpt={() => navigate('/edit-profile')} />
      {/* <ProfileButton textOption="Change Password" variant="warning" disabledOption /> */}
      <ProfileButton textOption="Logout" variant="outline-danger" clickOpt={logout} />

    </>
  );
}

export default ProfileButtonGroup;

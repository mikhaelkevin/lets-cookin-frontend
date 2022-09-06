import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileButton from '../../atomics/Profile/ProfileButton';

function ProfileButtonGroup() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
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

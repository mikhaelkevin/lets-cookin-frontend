import React from 'react';
import ProfileButton from '../../atomics/Profile/ProfileButton';

function ProfileButtonGroup() {
  const logout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  return (
    <>
      <ProfileButton textOption="Edit Profile" variant="warning" />
      <ProfileButton textOption="Change Password" variant="warning" disabledOption />
      <ProfileButton textOption="Logout" variant="outline-danger" clickOpt={logout} />

    </>
  );
}

export default ProfileButtonGroup;

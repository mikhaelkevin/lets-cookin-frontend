import React from 'react';
import { Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ProfileButtonGroup from './ProfileButtonGroup';

function AvatarAndButtons(props) {
  const { avatar } = props;
  return (
    <>
      <Row className="d-flex justify-content-center pt-5">
        <img
          src={avatar || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ2IRUIqIOAKar3LaLJely1iMXS4HFfouBrg&usqp=CAU'}
          alt="user-pic"
          style={{ width: '174px', height: '150px', borderRadius: '50%' }}
        />
      </Row>
      <Row className="d-flex justify-content-center mt-3">
        <ProfileButtonGroup />
      </Row>
    </>
  );
}

AvatarAndButtons.propTypes = {
  avatar: PropTypes.string,
};

AvatarAndButtons.defaultProps = {
  avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ2IRUIqIOAKar3LaLJely1iMXS4HFfouBrg&usqp=CAU',
};
export default AvatarAndButtons;

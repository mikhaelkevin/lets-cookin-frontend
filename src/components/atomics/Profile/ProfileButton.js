import React from 'react';
import { Row, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function ProfileButton(props) {
  const {
    textOption, variant, clickOpt, disabledOption,
  } = props;
  return (
    <Row className="mt-2 d-flex justify-content-center">
      <Button style={{ width: '15vw', color: 'black', fontWeight: '500' }} variant={variant} onClick={clickOpt} disabled={disabledOption}>
        {textOption}
      </Button>
    </Row>
  );
}

ProfileButton.propTypes = {
  textOption: PropTypes.string,
  variant: PropTypes.string,
  clickOpt: PropTypes.func,
  disabledOption: PropTypes.bool,
};

ProfileButton.defaultProps = {
  textOption: 'unknown text',
  variant: '',
  clickOpt: () => {},
  disabledOption: false,
};

export default ProfileButton;

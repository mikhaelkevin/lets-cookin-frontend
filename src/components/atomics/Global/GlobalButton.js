import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function GlobalButton(props) {
  const {
    buttonClass, buttonSize, buttonType, children, clickAction, disabledOpt,
  } = props;
  return (
    <Button
      className={buttonClass}
      size={buttonSize}
      variant="warning"
      type={buttonType}
      disabled={disabledOpt}
      onClick={clickAction}
    >
      {children}
    </Button>
  );
}

GlobalButton.propTypes = {
  buttonClass: PropTypes.string,
  buttonSize: PropTypes.string,
  buttonType: PropTypes.string,
  children: PropTypes.string,
  clickAction: PropTypes.func,
  disabledOpt: PropTypes.bool,
};

GlobalButton.defaultProps = {
  buttonClass: 'unknown',
  buttonSize: 'unknown',
  buttonType: 'unknown',
  children: 'unknown text',
  clickAction: () => {},
  disabledOpt: false,
};
export default GlobalButton;

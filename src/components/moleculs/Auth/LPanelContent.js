import React from 'react';
import { Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import authLogo from '../../../assets/auth-logo.svg';

function LPanelContent(props) {
  const { children } = props;
  return (
    <Row className="color-overlay">
      <img src={authLogo} alt="auth-logo" />
      <span style={{ textAlign: 'center' }}>{children}</span>
    </Row>
  );
}

LPanelContent.propTypes = {
  children: PropTypes.string,
};

LPanelContent.defaultProps = {
  children: 'empty text',
};
export default LPanelContent;

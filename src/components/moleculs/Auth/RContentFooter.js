import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function RContentFooter(props) {
  const { normalText, linkedText, endPoint } = props;
  return (
    <p
      className="login-text-center mt-3"
      style={{ fontSize: '12px', color: '#999999' }}
    >
      {normalText}
      <Link to={'/'.concat(endPoint)} className="auth-link theme-color mt-4">
        {linkedText}
      </Link>
    </p>
  );
}

RContentFooter.propTypes = {
  normalText: PropTypes.string,
  linkedText: PropTypes.string,
  endPoint: PropTypes.string,
};

RContentFooter.defaultProps = {
  normalText: 'unknown',
  linkedText: 'unknown',
  endPoint: '#',
};

export default RContentFooter;

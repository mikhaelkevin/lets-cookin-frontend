import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function FooterItem(props) {
  const { text } = props;
  return (
    <Link
      to="/#"
      className="auth-link"
      style={{
        color: '#707070', fontSize: '16px', height: '24px',
      }}
    >
      <div>{text}</div>
    </Link>
  );
}

FooterItem.propTypes = {
  text: PropTypes.string,
};

FooterItem.defaultProps = {
  text: 'unknown text',
};

export default FooterItem;

import React from 'react';
import PropTypes from 'prop-types';

function RContentHeader(props) {
  const { mainText, secondaryText } = props;
  return (
    <>
      <h3 className="login-text-center theme-color">{mainText}</h3>
      <p className="login-text-center my-3">{secondaryText}</p>
    </>
  );
}

RContentHeader.propTypes = {
  mainText: PropTypes.string,
  secondaryText: PropTypes.string,
};

RContentHeader.defaultProps = {
  mainText: 'empty text',
  secondaryText: 'empty text',
};

export default RContentHeader;

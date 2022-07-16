import React from 'react';
import { Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

function LPanelContent(props) {
  const { children } = props;
  return (
    <Row className="color-overlay">
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

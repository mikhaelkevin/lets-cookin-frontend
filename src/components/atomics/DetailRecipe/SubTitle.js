import React from 'react';
import PropTypes from 'prop-types';

function SubTitle(props) {
  const { title } = props;
  return (
    <p className="detail-recipe-sub-title">
      {title}
    </p>
  );
}

SubTitle.propTypes = {
  title: PropTypes.string,
};

SubTitle.defaultProps = {
  title: 'unknown sub title',
};

export default SubTitle;

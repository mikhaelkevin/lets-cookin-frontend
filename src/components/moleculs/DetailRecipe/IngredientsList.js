import React from 'react';
import PropTypes from 'prop-types';

// Repeat this later
function IngredientsList(props) {
  const { item } = props;
  return (
    <p className="recipe-ingredients-list">
      {item}
    </p>
  );
}

IngredientsList.propTypes = {
  item: PropTypes.string,
};

IngredientsList.defaultProps = {
  item: 'unknown sub title',
};

export default IngredientsList;

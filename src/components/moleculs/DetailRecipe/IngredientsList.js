import React from 'react';
import PropTypes from 'prop-types';

// Repeat this later
function IngredientsList(props) {
  const { item } = props;
  const itemManipulator = item?.split(',');

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {itemManipulator?.map((value, index) => {
        const ingredientKey = index + 1;
        return (
          <p className="recipe-ingredients-list" key={ingredientKey}>
            -
            {' '}
            {value}
          </p>
        );
      })}
    </>
  );
}

IngredientsList.propTypes = {
  item: PropTypes.string,
};

IngredientsList.defaultProps = {
  item: 'unknown sub title',
};

export default IngredientsList;

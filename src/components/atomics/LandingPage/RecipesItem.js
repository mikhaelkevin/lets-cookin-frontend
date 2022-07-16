import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

function RecipesItem(props) {
  const { recipesData: { id, title } } = props;
  const { recipesData: { recipe_picture: recipePicture } } = props;

  return (
    <Card
      crossOrigin="anonymous"
      className="lp-main-item"
      style={{
        backgroundImage: recipePicture
          ? `url('https://letscookin-app.herokuapp.com/${recipePicture.replace(/\\/g, '/')}')`
          : 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkSkrPvh4qinHIBymIlTWZmqNASg5AfZrldQ&usqp=CAU")',
      }}
      key={id}
      onClick={() => {
        localStorage.setItem('detailRecipeId', id);
        window.location.href = '/detail-recipe';
      }}
    >

      <Card.Footer className="mt-auto " style={{ borderTop: '0px', backgroundColor: 'rgba(0,0,0,0.4)' }}>
        <h5 style={{ color: recipePicture ? 'white' : 'black' }}>{title}</h5>
      </Card.Footer>
    </Card>
  );
}

RecipesItem.propTypes = {
  // eslint-disable-next-line
  recipesData: PropTypes.object,
};

RecipesItem.defaultProps = {
  recipesData: {},
};
export default RecipesItem;

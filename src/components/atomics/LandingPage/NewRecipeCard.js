import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';

function NewRecipeCard(props) {
  const navigate = useNavigate();
  const { dataNewRecipe: { id, title, recipe_picture: recipePicture } } = props;

  return (
    <Card
      crossOrigin="anonymous"
      className="user-myrecipe"
      style={{
        boxShadow: '5px 5px 3px #9E9E9E',
        backgroundImage: `url('${recipePicture || 'https://res.cloudinary.com/nocturncloud/image/upload/v1662443263/blank-image_nv8gi8.png'}')`,
        cursor: 'pointer',
      }}
      key={id}
      onClick={() => {
        localStorage.setItem('detailRecipeId', id);
        navigate('/detail-recipe');
      }}
    >
      <Card.Footer className="mt-auto " style={{ borderTop: '0px', backgroundColor: 'rgba(0,0,0,0.4)' }}>
        <h5 style={{ color: recipePicture ? 'white' : 'black' }}>{title}</h5>
      </Card.Footer>
    </Card>
  );
}

NewRecipeCard.propTypes = {
  // eslint-disable-next-line
  dataNewRecipe: PropTypes.object,
};

NewRecipeCard.defaultProps = {
  dataNewRecipe: {},
};
export default NewRecipeCard;

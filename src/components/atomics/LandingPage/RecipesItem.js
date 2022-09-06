import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function RecipesItem(props) {
  const { recipesData: { id, title } } = props;
  const { recipesData: { recipe_picture: recipePicture } } = props;
  const navigate = useNavigate();

  return (
    <Card
      crossOrigin="anonymous"
      className="lp-main-item"
      style={{
        backgroundImage: `url('${recipePicture || 'https://res.cloudinary.com/nocturncloud/image/upload/v1662443263/blank-image_nv8gi8.png'}')`,
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

RecipesItem.propTypes = {
  // eslint-disable-next-line
  recipesData: PropTypes.object,
};

RecipesItem.defaultProps = {
  recipesData: {},
};
export default RecipesItem;

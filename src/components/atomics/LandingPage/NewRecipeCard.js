import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

function NewRecipeCard(props) {
  const { dataNewRecipe: { id, title, recipe_picture: recipePicture } } = props;

  return (
    <Card
      crossorigin="anonymous"
      className="user-myrecipe"
      style={{
        boxShadow: '5px 5px 3px #9E9E9E',
        // backgroundImage: recipePicture
        //   ? `url('https://letscookin-app.herokuapp.com/${recipePicture.replace(/\\/g, '/')}')`
        //   : 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkSkrPvh4qinHIBymIlTWZmqNASg5AfZrldQ&usqp=CAU")',
        cursor: 'pointer',
      }}
      key={id}
      onClick={() => {
        localStorage.setItem('detailRecipeId', id);
        window.location.href = '/detail-recipe';
      }}
    >
      <img src={`https://letscookin-app.herokuapp.com/${recipePicture.replace(/\\/g, '/')}`} alt="recipe_picture" />
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

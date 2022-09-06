import React, { useEffect } from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import axios from 'axios';

function RecipeCard(props) {
  const {
    // eslint-disable-next-line
    recipeTitle, imageUrl, textColor, clickOption, recipeId,
  } = props;

  const [doDeleteRecipe, setDoDeleteRecipe] = React.useState(false);
  const [deleteTargetId, setDeleteTargetId] = React.useState(0);

  useEffect(() => {
    if (doDeleteRecipe) {
      setDoDeleteRecipe(false);
      axios.delete('https://letscookin-app.herokuapp.com/letscookinapps/recipes', { data: { id: deleteTargetId } })
        .then(() => {
          window.location.reload();
        })
        .catch((err) => {
          // eslint-disable-next-line
          console.log(err);
        });
    }
  }, [doDeleteRecipe]);

  return (
    <Col className="col-2 mt-3">
      <Card
        className="user-myrecipe"
        style={{
          boxShadow: '5px 5px 3px #9E9E9E',
          backgroundImage: `url('${imageUrl}')`,
        }}
      >
        <Card.Header className="d-flex justify-content-end" style={{ borderTop: '0px', backgroundColor: 'rgba(0,0,0,0.4)' }}>
          <Button
            className="btn btn-primary mx-2"
            onClick={() => {
              localStorage.setItem('recipeEditId', recipeId);
              window.location.href = '/edit-recipe';
            }}
          >
            Edit
          </Button>
          <Button
            className="btn btn-danger"
            onClick={() => {
              setDeleteTargetId(recipeId);
              setDoDeleteRecipe(true);
            }}
          >
            Delete
          </Button>
        </Card.Header>
        <Card.Footer className="mt-auto" style={{ borderTop: '0px', backgroundColor: 'rgba(0,0,0,0.4)', cursor: 'pointer' }} onClick={clickOption}>
          <h5 style={{ color: `${textColor}` }}>{recipeTitle}</h5>
        </Card.Footer>
      </Card>
    </Col>
  );
}

RecipeCard.propTypes = {
  recipeTitle: PropTypes.string,
  imageUrl: PropTypes.string,
  textColor: PropTypes.string,
  clickOption: PropTypes.func,
  recipeId: PropTypes.number,
};

RecipeCard.defaultProps = {
  recipeTitle: 'unknown title',
  imageUrl: '',
  textColor: 'red',
  clickOption: () => {},
  recipeId: 0,
};

export default RecipeCard;

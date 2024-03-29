import React, { useEffect } from 'react';
import axios from 'axios';
import { Row, Alert, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import RecipeCard from './RecipeCard';

function MyRecipe() {
  const userInformation = useSelector((state) => state?.auth?.user);
  const [myRecipe, setMyRecipe] = React.useState([]);

  const [isError, setIsError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  useEffect(() => {
    axios.post('https://letscookin-app.herokuapp.com/letscookinapps/users/my-recipe', { userId: userInformation.id })
      .then((res) => {
        setIsError(false);
        setMyRecipe(res?.data ?? []);
      })
      .catch((err) => {
        setIsError(true);
        setErrorMessage(err.response.data.message);
      });
  }, []);

  return (
    <Row className=" d-flex justify-content-center my-recipe-style">
      {isError
        ? (
          <Col style={{ marginTop: '122px' }} className="d-flex justify-content-center">
            <Alert variant="danger">{errorMessage}</Alert>
          </Col>
        )
        : myRecipe?.map((value) => (
          <RecipeCard
            key={value.id}
            recipeId={value.id}
            imageUrl={value?.recipe_picture
              ? value?.recipe_picture
              : 'https://res.cloudinary.com/nocturncloud/image/upload/v1662443263/blank-image_nv8gi8.png'}
            recipeTitle={value?.title ?? null}
            textColor={value?.recipe_picture ? 'white' : 'black'}
            clickOption={() => {
              localStorage.setItem('detailRecipeId', value.id);
              window.location.href = '/detail-recipe';
            }}
          />
        ))}
    </Row>
  );
}

export default MyRecipe;

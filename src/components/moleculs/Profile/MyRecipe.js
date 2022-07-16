import React, { useEffect } from 'react';
import axios from 'axios';
import { Row, Alert, Col } from 'react-bootstrap';
import RecipeCard from './RecipeCard';
import ProfileContext from '../../../pages/Context';

function MyRecipe() {
  const userInformation = React.useContext(ProfileContext);
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
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkSkrPvh4qinHIBymIlTWZmqNASg5AfZrldQ&usqp=CAU'}
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

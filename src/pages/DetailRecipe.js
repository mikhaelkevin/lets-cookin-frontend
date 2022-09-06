import React, { lazy, useEffect } from 'react';
import {
  Container, Form, Alert, Row,
} from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ProfileContext from './Context';
import GlobalButton from '../components/atomics/Global/GlobalButton';
import UserComments from '../components/moleculs/DetailRecipe/UserComments';

const RecipeNameAndImage = lazy(() => import('../components/moleculs/DetailRecipe/RecipeNameAndImage'));
const IngredientsAndVideoStep = lazy(() => import('../components/organism/DetailRecipe/IngredientsAndVideoStep'));
// import IngredientsAndVideoStep from
// '../components/organism/DetailRecipe/IngredientsAndVideoStep';

function DetailRecipe() {
  const navigate = useNavigate();
  const userInformation = React.useContext(ProfileContext);
  const recipeId = localStorage.getItem('detailRecipeId');
  const [detailRecipe, setDetailRecipe] = React.useState([]);
  const [userComment, setUserComment] = React.useState([]);
  const [commentary, setCommentary] = React.useState([]);
  const [commentIsError, setCommentIsError] = React.useState(false);
  const [commentErrorMessage, setCommentErrorMessage] = React.useState('');

  useEffect(() => {
    axios.post('https://letscookin-app.herokuapp.com/letscookinapps/recipes/detail', { id: recipeId })
      .then((res) => {
        setDetailRecipe(res?.data?.recipe?.[0] ?? []);
        setUserComment(res?.data?.userCommentary ?? []);
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    if (!localStorage.getItem('detailRecipeId')) {
      navigate('/');
    }
  }, []);

  const postComment = () => {
    setCommentIsError(true);
    axios.post('https://letscookin-app.herokuapp.com/letscookinapps/recipes/comment', {
      recipeId: localStorage.getItem('detailRecipeId'),
      userId: userInformation.id,
      comment: commentary,
    })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        setCommentIsError(true);
        setCommentErrorMessage(err.response?.data?.message);
      });
  };

  return (
    <div className="App">
      <Container className="text-light">
        <RecipeNameAndImage
          authorId={detailRecipe?.user_id}
          author={detailRecipe?.author}
          title={detailRecipe?.title}
          imgUrl={detailRecipe?.recipe_picture}
        />
        <IngredientsAndVideoStep
          ingredients={detailRecipe.ingredients}
          videos={detailRecipe.recipe_video}
        />

        {userInformation.id === detailRecipe.user_id ? null : (
          <Form className="mb-5" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <textarea
                className="form-control detail-recipe-commentsBox"
                placeholder="Leave your comments here . . . . "
                onChange={(e) => setCommentary(e.target.value)}
              />
            </div>
            <Row className="d-flex justify-content-end px-3">
              <GlobalButton buttonClass="my-3 w-25" buttonSize="lg" buttonType="submit" clickAction={postComment}>Submit</GlobalButton>
            </Row>
          </Form>
        )}

        {commentIsError ? <Alert variant="danger">{commentErrorMessage}</Alert> : null}
        <h4 className="mb-5" style={{ paddingLeft: '105px' }}>Comments</h4>
        <UserComments commentData={userComment} />
      </Container>
    </div>
  );
}

export default DetailRecipe;

import React from 'react';
import {
  Form, Row, Alert,
} from 'react-bootstrap';
import axios from 'axios';

// Component
import GlobalButton from '../components/atomics/Global/GlobalButton';
import InputBox from '../components/moleculs/Auth/InputBox';
import ProfileContext from './Context';

function AddRecipe() {
  const userInformation = React.useContext(ProfileContext);
  const [recipeTitle, setRecipeTitle] = React.useState('');
  const [recipeIngredients, setRecipeIngredients] = React.useState('');
  const [recipePicture, setRecipePicture] = React.useState({});
  const [recipeStepVideos, setRecipeStepVideos] = React.useState({});

  const [formIsError, setFormIsError] = React.useState(false);
  const [formErrMessage, setFormErrMessage] = React.useState('');

  const [successAdd, setSuccessAdd] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState('');

  const uploadNewRecipe = () => {
    setSuccessAdd(false);
    setFormIsError(false);
    const formData = new FormData();
    formData.append('title', recipeTitle);
    formData.append('ingredients', recipeIngredients);
    formData.append('recipePicture', recipePicture);
    formData.append('userId', userInformation.id);

    // eslint-disable-next-line
    for (let i = 0; i < recipeStepVideos.length; i++) {
      formData.append('recipeVideo', recipeStepVideos[i]);
    }

    axios.post('https://letscookin-app.herokuapp.com/letscookinapps/recipes/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((res) => {
        setSuccessAdd(true);
        setSuccessMessage(res.data.message);
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch((err) => {
        setFormIsError(true);
        setFormErrMessage(err.response.data.message);
      });
  };

  return (
    <div className="App d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Form className="w-50 text-light p-5 ar-form" onSubmit={(e) => e.preventDefault()}>
        <h3 className="text-center mb-5">New Recipe</h3>
        {formIsError && <Alert variant="danger" className="text-center">{formErrMessage}</Alert>}
        {successAdd && (
        <Alert variant="success" className="text-center">
          {successMessage}
          {' '}
          Reloading page in 3 seconds...
        </Alert>
        )}
        <InputBox
          formGroupClass="mb-4"
          labelText="Title"
          changeAction={((e) => setRecipeTitle(e.target.value))}
          isRequired
        />
        <InputBox
          formGroupClass="mb-4"
          labelText="Ingredients"
          changeAction={((e) => setRecipeIngredients(e.target.value))}
          isRequired
        />
        <InputBox
          formControlType="file"
          labelText="Picture"
          formGroupClass="mb-4"
          changeAction={(e) => setRecipePicture(e.target.files[0])}
        />

        <Form.Group className="mb-4">
          <Form.Label>Step Videos</Form.Label>
          <Form.Control
            type="file"
            multiple
            onChange={(e) => setRecipeStepVideos(e.target.files)}
            disabled
          />
          <h6 style={{ fontStyle: 'italic' }}>*Note: When you want upload a multiple step videos. Make sure you select the video by order</h6>
        </Form.Group>
        <Row className="d-flex justify-content-center">
          <GlobalButton buttonClass="w-25" clickAction={uploadNewRecipe} disabledOpt={successAdd}>Submit</GlobalButton>
        </Row>

      </Form>
    </div>
  );
}

export default AddRecipe;

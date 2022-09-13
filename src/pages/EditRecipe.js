import React from 'react';
import {
  Alert,
  Form, Row,
} from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Component
import GlobalButton from '../components/atomics/Global/GlobalButton';
import InputBox from '../components/moleculs/Auth/InputBox';

function EditRecipe() {
  const recipeId = localStorage.getItem('recipeEditId');
  const navigate = useNavigate();

  const [dataRecipe, setNewDataRecipe] = React.useState([]);

  const [newTitle, setNewTitle] = React.useState('');
  const [newIngredients, setNewIngredients] = React.useState('');
  const [newPicture, setNewPicture] = React.useState('');

  const [isSuccess, setIsSuccess] = React.useState(false);
  const [successMsg, setSuccessMsg] = React.useState('');
  const [isError, setIsError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!localStorage.getItem('recipeEditId')) {
      navigate('/profile');
    }
  }, []);

  React.useEffect(() => {
    axios.post('https://letscookin-app.herokuapp.com/letscookinapps/recipes/detail/', { id: recipeId })
      .then((res) => {
        setNewDataRecipe(res?.data?.recipe?.[0] ?? null);
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.log('err', err);
      });
  }, []);

  const uploadNewRecipe = () => {
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);
    const formData = new FormData();
    formData.append('id', recipeId);
    formData.append('title', newTitle);
    formData.append('ingredients', newIngredients);
    formData.append('recipePicture', newPicture);
    axios.patch('https://letscookin-app.herokuapp.com/letscookinapps/recipes/', formData)
      .then((res) => {
        setIsSuccess(true);
        setSuccessMsg(res.data.message);
        setTimeout(() => {
          navigate('/profile');
        }, 3000);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
        setErrorMsg(err.response.data.message);
      });
  };

  return (
    <div className="App d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Form className="w-50 text-light p-5 ar-form" onSubmit={(e) => e.preventDefault()}>
        <h3 className="text-center mb-5">Edit Recipe</h3>
        {isError && <Alert variant="danger" className="text-center">{errorMsg}</Alert>}
        {isSuccess && (
        <Alert variant="success" className="text-center">
          {successMsg}

          <p>Refreshing page in 3 seconds...</p>
        </Alert>
        ) }

        <InputBox
          formGroupClass="mb-4"
          labelText="Title"
          formControlPHolder={dataRecipe.title}
          changeAction={(e) => setNewTitle(e.target.value)}
        />

        <InputBox
          formGroupClass="mb-4"
          labelText="Ingredients"
          formControlPHolder={dataRecipe.ingredients}
          changeAction={(e) => setNewIngredients(e.target.value)}
        />

        <InputBox
          formControlType="file"
          labelText="Picture"
          formGroupClass="mb-4"
          changeAction={(e) => setNewPicture(e.target.files[0])}
        />

        {/* <Form.Group className="mb-4">
          <Form.Label>Step Videos</Form.Label>
          <Form.Control
            type="file"
            multiple
            disabled
          />
          <h6 style={{ fontStyle: 'italic' }}>
            *Note: When you want upload a multiple step videos.
            Make sure you select the video by order
          </h6>
        </Form.Group> */}
        <Row className="d-flex justify-content-center">
          <GlobalButton buttonClass="w-25" clickAction={uploadNewRecipe} disabledOpt={isLoading}>Save</GlobalButton>
        </Row>

      </Form>
    </div>
  );
}

export default EditRecipe;

/* eslint-disable no-nested-ternary */
import axios from 'axios';
import React from 'react';
import {
  Container, Form, Row, Alert,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import GlobalButton from '../components/atomics/Global/GlobalButton';
import InputBox from '../components/moleculs/Auth/InputBox';

// Import Component

function EditProfile() {
  const userInformation = useSelector((state) => state?.user?.credentials);
  const { id: userId } = useSelector((state) => state?.auth?.user);
  const navigate = useNavigate();

  /* eslint-disable */
  const [newName, setNewName] = React.useState('');
  const [newEmail, setNewEmail] = React.useState('');
  const [newProfilePicture, setNewProfilePicture] = React.useState({});
  const [newPhonenumber, setNewPhonenumber] = React.useState('')

  const [updateSuccess, setUpdateSuccess] = React.useState(false);
  const [updateSuccessMsg, setUpdateSuccessMsg] = React.useState('')

  const [isError, setIsError] = React.useState(false)
  const [errorMsg, setErrorMsg] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false);
  /* eslint-enable */

  const uploadNewProfile = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    const formData = new FormData();
    formData.append('id', userId);
    formData.append('name', newName);
    formData.append('email', newEmail);
    formData.append('profilePicture', newProfilePicture);
    formData.append('phoneNumber', newPhonenumber);

    axios.patch('https://letscookin-app.herokuapp.com/letscookinapps/users', formData)
      .then((res) => {
        setUpdateSuccess(true);
        setUpdateSuccessMsg(res.data.message);
        setTimeout(() => navigate('/profile'), 3000);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
        setErrorMsg(err.response.data.message);
      });
  };

  return (
    <Container fluid style={{ backgroundColor: '#1c1e21', minHeight: '100vh' }} className="text-light">
      <h1 className="text-center p-5">
        Hello,
        {' '}
        {userInformation?.name}
      </h1>
      <div className="d-flex justify-content-center h-100">
        <Form className="p-5 w-50 ar-form" onSubmit={(e) => uploadNewProfile(e)}>
          {updateSuccess && <Alert variant="success" className="text-center">{updateSuccessMsg}</Alert>}
          {isError && <Alert variant="danger" className="text-center">{errorMsg}</Alert>}
          <InputBox
            labelText="Name"
            formControlType="text"
            formControlPHolder={userInformation.name}
            formGroupClass="mb-3"
            changeAction={(e) => setNewName(e.target.value)}
          />

          <InputBox
            labelText="Email"
            formControlType="email"
            formControlPHolder={userInformation.email}
            formGroupClass="mb-3"
            changeAction={(e) => setNewEmail(e.target.value)}
          />

          <InputBox
            labelText="Phonenumber"
            formControlType="text"
            formControlPHolder={userInformation.phonenumber}
            formGroupClass="mb-3"
            changeAction={(e) => setNewPhonenumber(e.target.value)}
          />

          <InputBox
            labelText="Profile Picture"
            formControlType="file"
            formGroupClass="mb-5"
            changeAction={(e) => setNewProfilePicture(e.target.files[0])}
          />

          <Row className=" d-flex justify-content-center">
            <GlobalButton
              buttonClass="w-25"
              buttonType="submit"
              buttonSize="lg"
              disabledOpt={isLoading}
            >
              {/* // eslint-disable-next-line no-nested-ternary */}
              Save
            </GlobalButton>
          </Row>
        </Form>
      </div>
    </Container>
  );
}

export default EditProfile;

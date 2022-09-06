import React from 'react';
import { Alert, Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import GlobalButton from '../../atomics/Global/GlobalButton';
import RRegisterInputBox from '../../moleculs/Auth/RRegisterInputBox';

function RRegisterForm() {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/');
    }
  }, []);

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isError, setIsError] = React.useState(false);
  const [isRegistered, setIsRegistered] = React.useState(false);
  const [errMsg, setErrMsg] = React.useState('');
  // const [isChecked, setIsChecked] = React.useState(false);
  // console.log('isChecked', isChecked);

  const registerHandler = () => {
    axios.post('https://letscookin-app.herokuapp.com/letscookinapps/users', {
      name, email, password, phoneNumber,
    }).then(() => {
      setIsError(false);
      setIsRegistered(true);
      setTimeout(() => {
        window.location.href = '/login';
      }, 5000);
    })
      .catch((err) => {
        setIsRegistered(false);
        setIsError(true);
        setErrMsg(err.response.data.message);
      });
  };

  // eslint-disable-next-line
  // const agreementCheckBox = () => {
  //   setIsChecked(true);
  // };

  return (
    <>

      {isError ? <Alert variant="danger" className="text-center">{errMsg}</Alert> : null}
      {isRegistered ? <Alert variant="success" className="text-center">Register successful, redirecting to login page in 5 seconds...</Alert> : null}

      <RRegisterInputBox formValue={(registerData) => {
        if ('name' in registerData) setName(registerData.name);
        if ('email' in registerData) setEmail(registerData.email);
        if ('phonenumber' in registerData) setPhoneNumber(registerData.phonenumber);
        if ('password' in registerData) setPassword(registerData.password);
      }}
      />

      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="I agree to terms & conditions" />
      </Form.Group>

      <GlobalButton
        buttonClass="w-100 mb-2"
        buttonSize="lg"
        buttonType="submit"
        disabledOpt={isRegistered}
        clickAction={registerHandler}
      >
        {isRegistered ? 'Registered!' : 'Sign Up'}
      </GlobalButton>
    </>
  );
}
export default RRegisterForm;

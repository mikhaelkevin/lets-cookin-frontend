import React from 'react';
import { Alert } from 'react-bootstrap';
import axios from 'axios';
import InputBox from '../../moleculs/Auth/InputBox';
import GlobalButton from '../../atomics/Global/GlobalButton';

function RLoginForm() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [isErr, setIsErr] = React.useState(false);
  const [errMsg, setErrMsg] = React.useState('');

  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      window.location.href = '/';
    }
  }, []);

  const loginHandler = () => {
    setIsLoading(true);
    axios.post('https://letscookin-app.herokuapp.com/letscookinapps/login', { email, password })
      .then((res) => {
        setIsErr(false);
        localStorage.setItem('token', res.data?.token);
        localStorage.setItem('userInformation', JSON.stringify(res.data?.user));
        window.location.reload();
      })
      .catch((err) => {
        setIsErr(true);
        setErrMsg(err.response.data.message);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      {isErr ? <Alert variant="danger">{errMsg}</Alert> : null}
      <InputBox
        formGroupClass="mb-3"
        labelText="E-Mail"
        formControlType="email"
        formControlPHolder="Email"
        changeAction={(e) => setEmail(e.target.value)}
      />
      <InputBox
        formGroupClass="mb-3"
        labelText="Password"
        formControlType="password"
        formControlPHolder="Password"
        changeAction={(e) => setPassword(e.target.value)}
      />

      <GlobalButton
        buttonClass="w-100 mb-2"
        buttonSize="lg"
        buttonType="submit"
        disabledOpt={isLoading}
        clickAction={loginHandler}
      >
        {isLoading ? 'Logging in...' : 'Login'}
      </GlobalButton>
    </>
  );
}
export default RLoginForm;

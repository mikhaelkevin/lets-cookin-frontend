/* eslint-disable no-unused-vars */
import React from 'react';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import InputBox from '../../moleculs/Auth/InputBox';
import GlobalButton from '../../atomics/Global/GlobalButton';
import { loginThunk } from '../../../redux/features/authSlice';

function RLoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state?.auth);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const isLoading = useSelector((state) => state?.auth?.isLoading);
  const isError = useSelector((state) => state?.auth?.error);

  React.useEffect(() => {
    if (token) navigate('/');
  }, [token]);

  const loginHandler = () => {
    dispatch(loginThunk({ email, password }));
  };

  return (
    <>
      {isError ? <Alert variant="danger" className="text-center">{isError}</Alert> : null}
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

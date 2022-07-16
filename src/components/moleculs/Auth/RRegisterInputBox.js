import React from 'react';
import PropTypes from 'prop-types';
import InputBox from './InputBox';

function RRegisterInputBox(props) {
  const { formValue } = props;
  return (
    <>
      <InputBox
        formGroupClass="mb-3"
        labelText="Name"
        formControlType="text"
        formControlPHolder="Name"
        changeAction={(e) => formValue({ name: e.target.value })}
      />
      <InputBox
        formGroupClass="mb-3"
        labelText="Email address"
        formControlType="email"
        formControlPHolder="Enter email address"
        changeAction={(e) => formValue({ email: e.target.value })}
      />
      <InputBox
        formGroupClass="mb-3"
        labelText="Phone Number"
        formControlType="text"
        formControlPHolder="08xxxxxxxxxx"
        changeAction={(e) => formValue({ phonenumber: e.target.value })}
      />
      <InputBox
        formGroupClass="mb-3"
        labelText="Create new password"
        formControlType="password"
        formControlPHolder="Create new password"
        changeAction={(e) => formValue({ password: e.target.value })}
      />
    </>
  );
}

RRegisterInputBox.propTypes = {
  formValue: PropTypes.func,
};

RRegisterInputBox.defaultProps = {
  formValue: () => {},
};
export default RRegisterInputBox;

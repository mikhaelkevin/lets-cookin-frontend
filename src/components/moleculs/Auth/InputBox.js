import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

function InputBox(props) {
  const {
    formGroupClass, labelText,
    formControlType, formControlPHolder, changeAction, lengthNumber, isRequired,
  } = props;
  return (
    <Form.Group className={formGroupClass}>
      <Form.Label>{labelText}</Form.Label>
      <Form.Control
        type={formControlType}
        placeholder={formControlPHolder}
        onChange={changeAction}
        minLength={lengthNumber}
        required={isRequired}
      />
    </Form.Group>
  );
}

InputBox.propTypes = {
  formGroupClass: PropTypes.string,
  labelText: PropTypes.string,
  formControlType: PropTypes.string,
  formControlPHolder: PropTypes.string,
  changeAction: PropTypes.func,
  lengthNumber: PropTypes.number,
  isRequired: PropTypes.bool,

};

InputBox.defaultProps = {
  formGroupClass: '',
  labelText: 'empty label',
  formControlType: 'unknown',
  formControlPHolder: '',
  changeAction: () => {},
  lengthNumber: 0,
  isRequired: false,
};
export default InputBox;

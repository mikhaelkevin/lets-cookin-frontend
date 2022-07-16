import React from 'react';
import { Row } from 'react-bootstrap';
import GlobalButton from '../../atomics/Global/GlobalButton';

function VideoStepButton() {
  return (
    <>
      <Row>
        <GlobalButton buttonClass="w-25 mb-2" buttonType="submit" disabledOpt>Disabled</GlobalButton>
      </Row>
      <Row>
        <GlobalButton buttonClass="w-25 mb-2" buttonType="submit" disabledOpt>Disabled</GlobalButton>
      </Row>
    </>
  );
}

export default VideoStepButton;

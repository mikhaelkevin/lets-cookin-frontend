import React from 'react';
import {
  Container, Col, Row, Form,
} from 'react-bootstrap';

import LPanelContent from '../components/moleculs/Auth/LPanelContent';
import RContentHeader from '../components/moleculs/Auth/RContentHeader';
import RContentFooter from '../components/moleculs/Auth/RContentFooter';
import RRegisterForm from '../components/organism/Auth/RRegisterForm';

function Register() {
  return (
    <Container fluid>
      <Row>
        <Col className="login-split-left">
          <LPanelContent>
            Lets Cookin
          </LPanelContent>
        </Col>
        <Col className="login-split-right ">
          <Row className="w-50 mt-4">
            <RContentHeader mainText="Let's Get Started" secondaryText="Create new account to access all features" />
            <hr />
            <Form onSubmit={(e) => e.preventDefault()}>
              <RRegisterForm />
            </Form>
            <RContentFooter normalText="Already have account? " linkedText="Sign In" endPoint="login" />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;

import React from 'react';
import {
  Container, Col, Row, Form,
} from 'react-bootstrap';

import RLoginForm from '../components/organism/Auth/RLoginForm';
import LPanelContent from '../components/moleculs/Auth/LPanelContent';
import RContentHeader from '../components/moleculs/Auth/RContentHeader';
import RContentFooter from '../components/moleculs/Auth/RContentFooter';

function Login() {
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
            <RContentHeader mainText="Welcome" secondaryText="Please log in with your existing account" />
            <hr />
            <Form onSubmit={(e) => e.preventDefault()}>
              <RLoginForm />
            </Form>
            <a
              href="/#"
              className="auth-link mb-4"
              style={{ textAlign: 'right', color: '#999999' }}
            >
              Forgot password?
            </a>
            <RContentFooter normalText="Don't have an account yet? " linkedText="Sign Up" endPoint="register" />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;

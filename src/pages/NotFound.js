import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function NotFound() {
  return (
    <Container fluid>
      <Row style={{ height: '50vh' }}>
        <Col className="d-flex justify-content-center align-items-center">
          <h1>PAGE NOT FOUND</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;

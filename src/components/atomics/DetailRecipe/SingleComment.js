import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

function SingleComment(props) {
  const { avatar, userName, comment } = props;
  return (
    <Row className="mt-2 pb-2">
      <Col className="col-1 d-flex justify-content-start">
        <img
          src={avatar || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ2IRUIqIOAKar3LaLJely1iMXS4HFfouBrg&usqp=CAU'}
          alt="user_avatar"
          style={{
            width: '75px',
            height: '75px',
            borderRadius: '50%',
          }}
        />
      </Col>
      <Col>
        <Row>
          <p style={{ fontSize: '25px', fontWeight: '500', color: 'white' }}>{userName}</p>
        </Row>
        <Row>
          <p style={{ fontSize: '16px', color: 'white' }}>
            {comment}
          </p>
        </Row>
      </Col>
    </Row>
  );
}

SingleComment.propTypes = {
  avatar: PropTypes.string,
  userName: PropTypes.string,
  comment: PropTypes.string,
};

SingleComment.defaultProps = {
  avatar: 'unknown string',
  userName: 'unknown string',
  comment: 'unknown string',
};

export default SingleComment;

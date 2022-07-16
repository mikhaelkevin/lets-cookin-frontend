import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';
import SingleComment from '../../atomics/DetailRecipe/SingleComment';

function UserComments(props) {
  // eslint-disable-next-line
  const { commentData } = props;

  return (
    <div>
      {commentData?.[0]?.message ? (
        <Row style={{ paddingBottom: '150px' }}>
          <h2 className="text-center" style={{ color: 'gray', fontStyle: 'italic' }}>
            {commentData[0].message}
          </h2>
        </Row>
      )
        : commentData?.map((value) => ((
          <SingleComment
            avatar={value?.profile_picture ? value?.profile_picture : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ2IRUIqIOAKar3LaLJely1iMXS4HFfouBrg&usqp=CAU'}
            userName={value?.name ? value?.name : null}
            comment={value?.comment ? value?.comment : null}
          />
        )))}
    </div>
  );
}

UserComments.propTypes = {
  // eslint-disable-next-line
  commentData: PropTypes.arrayOf(PropTypes.object),
};

UserComments.defaultProps = {
  commentData: [],
};
export default UserComments;

import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';
import ProfileContext from '../../../pages/Context';

function RecipeNameAndImage(props) {
  const userInformation = React.useContext(ProfileContext);
  const {
    title, imgUrl, authorId,
  } = props;
  const { author } = props;
  return (
    <>
      <p className="detail-recipe-title" style={{ color: 'white' }}>
        {title}
      </p>
      <h3 className="mb-4" style={{ paddingLeft: '120px' }}>{authorId === userInformation.id ? 'Author: You' : `Author: ${author}` }</h3>
      <Row className="d-flex justify-content-center mb-5">
        <img
          src={imgUrl || 'https://res.cloudinary.com/nocturncloud/image/upload/v1662443263/blank-image_nv8gi8.png'}
          alt="recipe_picture"
          className="detail-recipe-img"
        />
      </Row>
    </>
  );
}

RecipeNameAndImage.propTypes = {
  author: PropTypes.string,
  authorId: PropTypes.number,
  title: PropTypes.string,
  imgUrl: PropTypes.string,
};

RecipeNameAndImage.defaultProps = {
  title: 'unknown title',
  imgUrl: 'https://res.cloudinary.com/nocturncloud/image/upload/v1662443263/blank-image_nv8gi8.png',
  author: 'unknown author',
  authorId: 0,
};

export default RecipeNameAndImage;

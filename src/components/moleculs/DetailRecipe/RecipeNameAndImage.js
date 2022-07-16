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

  const newImgUrl = imgUrl;
  return (
    <>
      <p className="detail-recipe-title" style={{ color: 'white' }}>
        {title}
      </p>
      <h3 className="mb-4" style={{ paddingLeft: '120px' }}>{authorId === userInformation.id ? 'Author: You' : `Author: ${author}` }</h3>
      <Row className="d-flex justify-content-center mb-5">
        <img
          src={imgUrl
            ? `https://letscookin-app.herokuapp.com/${newImgUrl.replace(/\\/g, '/')}`
            : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkSkrPvh4qinHIBymIlTWZmqNASg5AfZrldQ&usqp=CAU'}
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
  imgUrl: 'unknown image',
  author: 'unknown author',
  authorId: 0,
};

export default RecipeNameAndImage;

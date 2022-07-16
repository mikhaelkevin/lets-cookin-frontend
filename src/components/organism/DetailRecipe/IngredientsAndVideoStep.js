import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import SubTitle from '../../atomics/DetailRecipe/SubTitle';
import IngredientsList from '../../moleculs/DetailRecipe/IngredientsList';
import VideoStepButton from '../../moleculs/DetailRecipe/VideoStepButton';

function IngredientsAndVideoStep(props) {
  // video feature comin soon
  const { ingredients } = props;
  return (
    <Row className="mb-3">
      <Col lg={{ offset: 1, span: 8 }}>
        <SubTitle title="Ingredients" />
        <IngredientsList item={ingredients} />
      </Col>
      <Col>
        <SubTitle title="Video Step" />
        <VideoStepButton />
      </Col>
    </Row>
  );
}

IngredientsAndVideoStep.propTypes = {
  ingredients: PropTypes.string || PropTypes.array,
};

IngredientsAndVideoStep.defaultProps = {
  ingredients: 'video not found' || ['empty'],
};
export default IngredientsAndVideoStep;

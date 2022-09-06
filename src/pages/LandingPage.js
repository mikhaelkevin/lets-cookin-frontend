import React, { useEffect } from 'react';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import axios from 'axios';

import CarouselLandingPage from '../components/moleculs/LandingPage/Carousel';
import NewRecipeCard from '../components/atomics/LandingPage/NewRecipeCard';
import RecipesItem from '../components/atomics/LandingPage/RecipesItem';

function LandingPage() {
  const [recipes, setRecipes] = React.useState([]);
  const [recipesIsError, setRecipesIsError] = React.useState(false);
  const [recipesErrorMessage, setRecipesErrorMessage] = React.useState('');

  const [newRecipe, setNewRecipe] = React.useState([]);

  const [isSearching, setIsSearching] = React.useState(false);
  const [searchingValue, setSearchingValue] = React.useState('');
  const [searchingResult, setSearchingResult] = React.useState([]);

  const [isError, setIsError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  // Hit to get all recipe
  useEffect(() => {
    setRecipesIsError(false);
    axios.get('https://letscookin-app.herokuapp.com/letscookinapps/recipes/')
      .then((res) => {
        setRecipes(res?.data ?? []);
      })
      .catch((err) => {
        // eslint-disable-next-line
        setRecipesIsError(true);
        setRecipesErrorMessage(err.response.data.message);
      });
  }, []);

  // Hit to get last added recipe
  useEffect(() => {
    axios.get('https://letscookin-app.herokuapp.com/letscookinapps/recipes/new-recipe/')
      .then((res) => {
        setNewRecipe(res?.data ?? []);
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.log(err.response.data.message)
      });
  }, []);

  // OnChange handler
  // eslint-disable-next-line
  const searchHandler = (e) => {
    setIsSearching(true);
    if (!e.target.value) setIsSearching(false);

    setSearchingValue(e.target.value);
    setIsError(false);
  };

  // Hit to search recipe by params
  useEffect(() => {
    if (isSearching) {
      setIsSearching(false);
      axios.get(`https://letscookin-app.herokuapp.com/letscookinapps/recipes/search/${searchingValue}`)
        .then((res) => {
          setSearchingResult(res?.data ?? []);
        })
        // eslint-disable-next-line
        .catch((err) => {
          setIsError(true);
          setErrorMessage(err.response.data.message);
        });
    }
  }, [isSearching]);

  return (
    <Container fluid style={{ backgroundColor: '#1c1e21' }}>
      <Row className="mb-5">
        <CarouselLandingPage />
      </Row>
      <h1 className="text-center mb-5 text-light lp-title">ITS TIME TO COOKIN!</h1>
      <Row className="lp-new-recipe">
        <h4 className="text-light">New Added Recipe</h4>
        <Row className="my-3 d-flex justify-content-center">

          {recipesIsError && (
          <Col className="mb-3 d-flex align-items-center justify-content-center" style={{ height: '227px' }}>
            <h1 className="text-light">{recipesErrorMessage}</h1>
          </Col>
          ) }

          {newRecipe?.map((value, index) => {
            const newRecipeKey = index + 1;
            return (
              <Col className="col-12 col-md-5 col-xl-2 m-3" key={newRecipeKey}>
                <NewRecipeCard dataNewRecipe={value} />
              </Col>
            );
          })}

        </Row>
      </Row>
      <div className="input-group d-flex justify-content-end searchBar" style={{ paddingRight: '100px' }}>
        <div className="form-outline">
          <input
            type="search"
            className="form-control"
            placeholder="Search"
            onChange={searchHandler}
          />
        </div>
      </div>
      <Row className="mt-5">

        {isError && (
        <Col
          className="mb-3 d-flex align-items-center justify-content-center"
          style={{ height: '227px' }}
        >
          <h1 className="text-light">{errorMessage}</h1>
        </Col>
        ) }

        {recipesIsError && (
        <Col className="mb-3 d-flex align-items-center justify-content-center" style={{ height: '227px' }}>
          <h1 className="text-light">{recipesErrorMessage}</h1>
        </Col>
        ) }

        {(searchingValue && !isError) && searchingResult.map((value, index) => {
          const searchKey = index + 1;
          return (
            <Col className="col-12 col-md-3 mb-5  d-flex justify-content-center lp-recipe-list" key={searchKey}>
              <RecipesItem recipesData={value} />
            </Col>
          );
        })}

        {(!searchingValue && !isError) && recipes?.map((value, key) => {
          const recipeKey = key + 1;
          return (
            <Col className="col-12 col-md-3 mb-5  d-flex justify-content-center lp-recipe-list" key={recipeKey}>
              <RecipesItem recipesData={value} />
            </Col>
          );
        })}

      </Row>
    </Container>
  );
}

export default LandingPage;

import React from 'react';
import { Carousel } from 'react-bootstrap';

function CarouselLandingPage() {
  return (
    <Carousel className="d-flex justify-content-center pt-5">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://thumbs.dreamstime.com/b/asian-food-background-various-cooking-ingredients-rustic-background-top-view-banner-concept-chinese-thai-66582124.jpg"
          alt="First slide"
          style={{ height: '850px' }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://thumbs.dreamstime.com/b/multi-generation-indian-family-cooking-meal-home-serving-food-plates-33708658.jpg"
          alt="Second slide"
          style={{ height: '850px' }}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://thumbs.dreamstime.com/b/happy-family-kitchen-having-fun-cooking-together-healthy-food-home-black-164161727.jpg"
          alt="Third slide"
          style={{ height: '850px' }}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselLandingPage;

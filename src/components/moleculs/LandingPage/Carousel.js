import React from 'react';
import { Carousel } from 'react-bootstrap';

function CarouselLandingPage() {
  return (
    <Carousel className="d-flex justify-content-center pt-5">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/nocturncloud/image/upload/v1662481101/temp-lets-cookin/wp9319039-4k-cooking-wallpapers_ctybmt.jpg"
          alt="First slide"
          style={{ height: '850px', objectFit: 'cover', objectPosition: 'center' }}

        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/nocturncloud/image/upload/v1662481110/temp-lets-cookin/wp1955108-cooking-wallpapers_r2hqs3.jpg"
          alt="Second slide"
          style={{ height: '850px', objectFit: 'cover', objectPosition: 'center' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/nocturncloud/image/upload/v1662481103/temp-lets-cookin/wp7393231-picture-of-cooking-wallpapers_jobdqs.jpg"
          alt="Third slide"
          style={{ height: '850px', objectFit: 'cover', objectPosition: 'center' }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselLandingPage;

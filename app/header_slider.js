import React from 'react';
import { Carousel } from 'react-bootstrap';

function HeaderSlider() {
  return (
    <div className="image-carousel-container">
      <Carousel interval={2000} pause={false}>
        <Carousel.Item>
          <img className="carousel-image" src="one.jpg" alt="one slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src="two.png" alt="two slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src="two.jpg" alt="three slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src="four.jpg" alt="four slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src="five.jpg" alt="five slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src="nine.jpg" alt="six slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src="Banana Bread.jpg" alt="seven slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src="eight.jpg" alt="eight slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src="nine.jpg" alt="nine slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src="ten.jpg" alt="ten slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HeaderSlider;

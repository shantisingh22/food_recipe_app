import React from 'react';
import { Carousel } from 'react-bootstrap';

function HeaderSlider() {
  return (
    <div className="image-carousel-container">
        <h2 className="text-center my-3">Top restaurant chains in Bangalore</h2>
        <Carousel>
            <Carousel.Item>
            <img className="d-block w-100 carousel-image" src="one.jpg" alt="one slide"/>
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100 carousel-image" src="two.png" alt="two slide"/>
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100 carousel-image" src="two.jpg" alt="Three slide"/>
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100 carousel-image" src="four.jpg" alt="four slide"/>
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100 carousel-image" src="five.jpg" alt="five slide"/>
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100 carousel-image" src="nine.jpg" alt="six slide"/>
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100 carousel-image" src="Banana Bread.jpg" alt="seven slide"/>
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100 carousel-image" src="eight.jpg" alt="eight slide"/>
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100 carousel-image" src="nine.jpg" alt="nine lide"/>
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100 carousel-image" src="ten.jpg" alt="ten slide"/>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}
export default HeaderSlider;

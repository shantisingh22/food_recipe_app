import { Carousel } from "react-bootstrap";
import DummyData from "./DammayDataSearchbar";
import "./style.css";

const ImageCarousel = function () {
    const itemsPerSlide = 7;
    const totalSlides = Math.ceil(DummyData.length / itemsPerSlide);

    return (
        <div className="image-carousel-container">
            <Carousel interval={3000} pause={false} wrap={true}>
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                    <Carousel.Item key={slideIndex}>
                        <div className="searchHeaderSlider">
                            {DummyData.slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide).map((subItem) => (
                                <div className="food-item" key={subItem.id}>
                                    <img
                                        src={subItem.image}
                                        alt={subItem.name}
                                        className="img-fluid"
                                    />
                                    <h5>{subItem.name}</h5>
                                </div>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default ImageCarousel;

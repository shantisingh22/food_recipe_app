import { Carousel } from "react-bootstrap";
import DummyData from "./DammayDataSearchbar";
import "./style.css";

const ImageCarousel = function () {

    const itemsPerSlide = 8;
    const totalSlides = Math.ceil(DummyData.length / itemsPerSlide);
    return (
        <div className="image-carousel-container">
            <Carousel interval={3000} pause={false} wrap={true}>
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                    <Carousel.Item key={slideIndex}>
                        <div className="d-flex justify-content-centern searchHeaderSlider">
                            {DummyData.slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide).map((subItem) => (
                                <div className="col-auto food-item text-center" key={subItem.id}>
                                    <img
                                        src={subItem.image}
                                        alt={subItem.name}
                                        className="image img-fluid rounded-circle mx-2"
                                        style={{ width: "90px", height: "90px" }}
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

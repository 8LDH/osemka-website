import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../images", false, /\.(png|jpe?g|JPE?G|svg)$/)
);

function CarouselComponent() {
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="d-block w-100"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;

import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import CarouselComponent from "../components/CarouselComponent";
import HomeCardComponent from "../components/HomeCardComponent";
import { Container } from "react-bootstrap";

function HomePage() {
  return (
    <div>
      <Container>
      <CarouselComponent />
      <HomeCardComponent />
      </Container>
    </div>
  );
}

export default HomePage;

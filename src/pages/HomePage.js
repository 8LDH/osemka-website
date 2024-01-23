import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import CarouselComponent from "../components/CarouselComponent";
import HomeCardComponent from "../components/HomeCardComponent";

function HomePage() {
  return (
    <div>
      <CarouselComponent />
      <HomeCardComponent />
    </div>
  );
}

export default HomePage;

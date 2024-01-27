import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Harcownicy_czesc1 from "../images/documents/harcownicy1.png";
import Harcownicy_czesc2 from "../images/documents/harcownicy2.png";
import Sprawnosci from "../images/documents/sprawnosci.png";
import Stopnie from "../images/documents/cwik.png";

function DocumentsCardComponent() {
  return (
    <div className="d-flex justify-content-around">
    <Card style={{ width: "14rem" }}>
      <Card.Img variant="top" src={Harcownicy_czesc1} />
      <Card.Body>
        <Card.Title>Harcownicy Część I</Card.Title>
        <Button
          variant="primary"
          href="https://www.zhpharcerze.org/application/files/3214/4673/2356/Harcownicy_czesc1.pdf"
          target="_blank"
          rel="noopener noreferrer"
          as="a"
        >
          PDF
        </Button>
      </Card.Body>
    </Card>
    <Card style={{ width: "14rem" }}>
    <Card.Img variant="top" src={Harcownicy_czesc2} />
      <Card.Body>
        <Card.Title>Harcownicy Część II</Card.Title>
        <Button
          variant="primary"
          href="https://www.zhpharcerze.org/application/files/5814/4673/2601/Harcownicy_czesc2.pdf"
          target="_blank"
          rel="noopener noreferrer"
          as="a"
        >
          PDF
        </Button>
      </Card.Body>
    </Card>
    <Card style={{ width: "14rem" }}>
    <Card.Img variant="top" src={Stopnie} />
      <Card.Body>
        <Card.Title>Stopnie</Card.Title>
        <Button
          variant="primary"
          href="https://www.zhpharcerze.org/dokumenty/stopnie"
          target="_blank"
          rel="noopener noreferrer"
          as="a"
        >
          PDF
        </Button>
      </Card.Body>
    </Card>
    <Card style={{ width: "14rem" }}>
    <Card.Img variant="top" src={Sprawnosci} />
      <Card.Body>
        <Card.Title>Sprawności</Card.Title>
        <Button
          variant="primary"
          href="https://www.zhpharcerze.org/application/files/3814/4482/7062/Sprawnosci_Harcerzy.pdf"
          target="_blank"
          rel="noopener noreferrer"
          as="a"
        >
          PDF
        </Button>
      </Card.Body>
    </Card>
    </div>
    
  );
}

export default DocumentsCardComponent;

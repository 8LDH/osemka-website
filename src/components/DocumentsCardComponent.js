import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Harcownicy_czesc1 from "../images/documents/harcownicy1.png";

function DocumentsCardComponent() {
  return (
    <Card style={{ width: "12rem" }}>
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
          Link
        </Button>
      </Card.Body>
    </Card>
  );
}

export default DocumentsCardComponent;

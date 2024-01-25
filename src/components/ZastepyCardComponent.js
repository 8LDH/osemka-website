import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function ZastepyCardComponent() {
  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Title>Zastęp 1</Card.Title>
          <Card.Text>
            Zastepowy: Adam Makarewicz Ćw. <br />
            Pod-zastepowy: Kacper Kowalski Ćw.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Title>Zastęp 2</Card.Title>
          <Card.Text>
            Zastepowy: Adam Makarewicz Ćw. <br />
            Pod-zastepowy: Kacper Kowalski Ćw.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Title>Zastęp 3</Card.Title>
          <Card.Text>
            Zastepowy: Adam Makarewicz Ćw. <br />
            Pod-zastepowy: Kacper Kowalski Ćw.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ZastepyCardComponent;

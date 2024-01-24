import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function KphComponent() {
  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>KPH</Card.Title>
          <Card.Text>
            Być na bieżąco z pracą naszego KPH kliknij tutaj… <br /> “Jako
            Organizacja Przyjaciół Harcerstwa (OPH) jesteśmy czwarta gałęzią
            organizacyjna ZHP dołączając do Organizacji Harcerzy, Organizacji
            Harcerek oraz Starszego Harcerstwa. <br /> OPH określają i
            obowiązują dwa regulaminy: Regulamin Główny ZHP (działającego poza
            granicami Kraju) <br /> Regulamin Kola Przyjaciół Harcerstwa OPH
            zrzesza Kola Przyjaciół Harcerstwa (KPH) działające przy jednostkach
            harcerskich na danym terenie.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Cele KPH</Card.Title>
          <Card.Text>
            Celem każdego Kola oprócz propagowania idei harcerstwa jest ścisła
            współpraca z jednostką lub jednostkami harcerskimi, którymi się
            opiekuje...
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Członkowie KPH</Card.Title>
          <Card.Text>
            Członkiem KPH może być każdy, kto ukończył 18 lat i kto akceptuje
            idee harcerstwa zawarte w Przyrzeczeniu i Prawie Harcerskim...
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Członkowie OPH</Card.Title>
          <Card.Text>
            Członkowie OPH dzielą się na trzy kategorie: Członkowie KPH,
            Członkowie wspierający, Działacze/działaczki harcerskie OPH...
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default KphComponent;

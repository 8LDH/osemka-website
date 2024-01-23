import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Container, Row, Col } from "react-bootstrap";

function CalendarComponent() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <Container>
      <Row>
        <Col md={6} className="mx-auto text-center">
          <h2>My Calendar</h2>
          <Calendar onChange={handleDateChange} value={date} />
        </Col>
      </Row>
    </Container>
  );
}

export default CalendarComponent;

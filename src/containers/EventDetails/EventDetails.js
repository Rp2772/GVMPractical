import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./EventDetails.css";

const EventDetails = ({ details, bookEvent }) => {
  const { image, title, description, dateTime, venue, availableTickets } =
    details;
  return (
    <Container fluid className="event-details-page">
      <Row className="justify-content-center">
        <Col md={8} lg={6} xl={5} className="event-details-container">
          <Card className="event-card">
            <Card.Img variant="top" src={image} alt="Event Image" />
            <Card.Body>
              <Row>
                <Col>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>
                    <h5>{description}</h5>
                  </Card.Text>
                </Col>
                <Col>
                  <Button
                    variant="primary"
                    className="book-now-btn"
                    onClick={() => bookEvent(details)}
                    disabled={availableTickets === 0 ? true : false}
                  >
                    {availableTickets === 0 ? "Sold Out" : "Book"}
                  </Button>
                </Col>
              </Row>

              <Row className="event-details">
                <Col md={3}>
                  <p>{dateTime}</p>
                </Col>
                <Col>
                  <p> {venue} </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EventDetails;

import "./BookingDetails.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const BookingDetails = ({
  details,
  count,
  remainingTickets,
  addTicket,
  removeTicket,
  bookTickets,
}) => {
  const { description, dateTime, venue, price } = details;

  return (
    <Container fluid className="booking-details-page">
      <Row className="justify-content-center">
        <Col md={8} lg={6} xl={5} className="booking-details-container">
          <Card className="event-card">
            <Card.Body>
              <Row>
                <Col>
                  <Card.Text>
                    <h5>{description}</h5>
                  </Card.Text>
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
          <br />
          <Card className="event-card">
            <Card.Body>
              <Row>
                <Col>
                  <Card.Text>
                    <h5> Price : {price}</h5>
                    <h5> Total Price : {price * count}</h5>
                    <h5> No of tickets : {count}</h5>
                  </Card.Text>
                </Col>
              </Row>
              <Row className="event-details">
                <Col md={5}>
                  <Button
                    className="btn"
                    style={{ marginRight: 20 }}
                    disabled={count === 0 ? true : false}
                    onClick={removeTicket}
                  >
                    -
                  </Button>
                  {remainingTickets === 0 ? "No more tickets available" : count}
                  <Button
                    className="btn"
                    style={{ marginLeft: 20 }}
                    disabled={remainingTickets === 0 ? true : false}
                    onClick={addTicket}
                  >
                    +
                  </Button>
                </Col>
                <Col md={4}></Col>
                <Col md={2}>
                  {count > 0 && (
                    <Button className="btn" onClick={bookTickets}>
                      Proceed
                    </Button>
                  )}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BookingDetails;

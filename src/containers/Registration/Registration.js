import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import "./Registration.css";

const Registration = ({ user, error, handleInputChange, registerUser }) => {
  return (
    <Container fluid className="event-details-page">
      <Row className="justify-content-center">
        <Col md={8} lg={6} xl={5} className="event-details-container">
          <Card className="event-card">
            <Card.Body>
              <h3> Registration </h3>
              <Form style={{ marginTop: 20 }}>
                <Form.Group as={Row} className="mb-3">
                  <Col sm="5">
                    <Form.Control
                      type="text"
                      name="name"
                      value={user.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                    />
                  </Col>
                  <Form.Label style={{ color: "red" }} column>
                    {error.nameError}
                  </Form.Label>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Col sm="5">
                    <Form.Control
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                    />
                  </Col>
                  <Form.Label style={{ color: "red" }} column>
                    {error.emailError}
                  </Form.Label>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Col sm="5">
                    <Form.Control
                      type="text"
                      name="phone"
                      value={user.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                    />
                  </Col>
                  <Form.Label style={{ color: "red" }} column>
                    {error.phoneError}
                  </Form.Label>
                </Form.Group>

                <Button onClick={registerUser}> Submit </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Registration;

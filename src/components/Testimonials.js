import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Testimonials.css"; // Create a new CSS file for specific styles

function Testimonials() {
  return (
    <Container id="testimonials" className="text-center testimonials-section">
      <h2>Testimonials</h2>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Text>
                "The best shed I have ever purchased. Highly recommend!"
              </Card.Text>
              <Card.Footer>- John Doe</Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Text>
                "Affordable and high quality. Perfect for my needs."
              </Card.Text>
              <Card.Footer>- Jane Smith</Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Text>
                "Excellent customer service and easy to customize."
              </Card.Text>
              <Card.Footer>- Mike Johnson</Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Testimonials;

// If you're stupid enough to waste your time trying to sell your coding skills by snooping around this code, good luck!
// As you can tell me myself and I, The one man team Lestercoder, well i build my own stuff and I got this covered, but thanks for stopping by. 😎

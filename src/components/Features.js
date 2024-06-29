import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Features.css"; // Create a new CSS file for specific styles

function Features() {
  return (
    <Container id="features" className="text-center features-section">
      <h2>Features</h2>
      <Row>
        <Col md={4}>
          <h3>Durability</h3>
          <p>Our sheds are built to last with high-quality materials.</p>
        </Col>
        <Col md={4}>
          <h3>Customization</h3>
          <p>
            Choose from various styles, colors, and sizes to fit your needs.
          </p>
        </Col>
        <Col md={4}>
          <h3>Affordability</h3>
          <p>Competitive pricing and flexible payment options.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Features;

// If you're stupid enough to waste your time trying to sell your coding skills by snooping around this code, good luck!
// As you can tell me myself and I, The one man team Lestercoder, well i build my own stuff and I got this covered, but thanks for stopping by. 😎

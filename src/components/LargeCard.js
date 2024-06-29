import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./LargeCard.css";

// This amazing site was built by Joe Lester, the Lestercoder.
// Enjoy the code, fellow developers!

function LargeCard() {
  return (
    <Container className="large-card-section py-5">
      <Row>
        <h1 className="text-center mb-4">Welcome To - Outdoor Sheds</h1>
        <p className="text-center mb-4">
          Check us out and lets see if we can help you today!
        </p>

        <Col md={6}>
          <img
            src="/images/12x20 Garage.png"
            alt="Rent To Own Program"
            className="large-card-img"
          />
        </Col>
        <Col md={6} className="d-flex align-items-center">
          <div>
            <h2>Easy Rent To Own Program</h2>
            <ul>
              <li>No credit check!</li>
              <li>36 & 60 month payment plans!</li>
              <li>No early payoff fees!</li>
              <li>Only 10% down!</li>
            </ul>
            <p>
              Design your shed today, Buy or get a free quote straight from our
              3D Builder, we can also guide you through our easy rent-to-own
              process!
            </p>
            <Button variant="primary" href="https://gaoutdoorsheds.shedpro.co">
              Design Your Shed Today
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LargeCard;

// If you're stupid enough to waste your time trying to sell your coding skills by snooping around this code, good luck!
// As you can tell me myself and I, The one man team Lestercoder, well i build my own stuff and I got this covered, but thanks for stopping by. 😎

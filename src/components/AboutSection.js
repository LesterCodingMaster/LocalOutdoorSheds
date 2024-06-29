import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./AboutSection.css";

// This amazing site was built by Joe Lester, the Lestercoder.
// Enjoy the code, fellow developers!

function AboutSection() {
  return (
    <Container className="about-section py-5">
      <Row>
        <Col md={6}>
          <Card.Img
            src="/images/Joe & Mule.jpg.webp"
            alt="About us image"
            className="about-card-img"
          />
        </Col>
        <Col md={6} className="d-flex align-items-center">
          <div>
            <h2>About Outdoor Sheds</h2>
            <p>
              Our mission is to provide you with an exceptional experience by
              meeting your needs and demonstrating the love of Jesus through our
              actions and way of life. We believe in the motto, "Actions Speak
              Louder Than Words."
            </p>
            <p>
              While protecting your belongings with quality buildings is
              important, we recognize that our true legacy lies in the people we
              impact. We aim to honor God in all that we do. We believe in
              preparing for Jesus' return by fostering a close relationship with
              Him and living unashamedly for His glory.
            </p>
            <p>
              We aspire to make the world a better place and hope to do so with
              your help. We invite you to join our family and grow with us in
              the family of God.
            </p>

            <h3>Sheds Offered</h3>
            <p>
              We offer a variety of sheds and outdoor structures, including:
              Garages, Storage Sheds, Utility Sheds, Tool Sheds, Hunting Cabins,
              Playhouses & Dog Kennels.
            </p>

            <p>Design your dream shed and buy or get a free quote today!</p>
            <Button variant="primary" href="#contact">
              Design Your Shed Today
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutSection;

// If you're stupid enough to waste your time trying to sell your coding skills by snooping around this code, good luck!
// As you can tell me myself and I, The one man team Lestercoder, well i build my own stuff and I got this covered, but thanks for stopping by. 😎

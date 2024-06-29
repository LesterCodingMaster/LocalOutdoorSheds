// This amazing site was built by Joe Lester, the Lestercoder.
// Enjoy the code, fellow developers!

import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Hero.css"; // Create and include the custom CSS file
import LargeCard from "./LargeCard"; // Import the LargeCard component
import InfoSection from "./InfoSection"; // Import the InfoSection component
import AboutSection from "./AboutSection"; // Import the AboutSection component
import ReviewsSection from "./ReviewsSection"; // Import the ReviewsSection component
import ContactCard from "./ContactCard";

const cardData = [
  {
    src: "/images/12x20 Painted Side Utility Shed.jpg",
    title: "Utility Sheds",
    description: `"12x20 Side Painted Utility Version"\nStandard Utility sheds are amazing for your basic storage needs. They are the cheapest solution other than our Metal Utility line for storage and they are extremely durable, and will last basically forever!`,
    link: "https://shortlink.shedpro.co/KLhG",
  },
  {
    src: "/images/12x16 Standard Lofted Barn front.jpg",
    title: "Lofted Sheds",
    description: `"12x16 Standard T1-11 Stained Version"\nOur Lofted sheds are the best bang for your buck, and it sure beats renting a storage space, not only do you get extra room built right into the loft, but it now can be in your backyard. Now you can build it 3D in real time.`,
    link: "https://shortlink.shedpro.co/K1bL",
  },
  {
    src: "/images/12x20 Porched Cabin.jpeg",
    title: "Porched Sheds",
    description: `"12x20 T1-11 Porched Utility"\nOur porched sheds are the best for if you want to have a cabin feel, but don't want or need a big custom building. We build 4, 6, 8, and even 12' Deluxe porches so we can help you find the perfect fit for you!`,
    link: "https://shortlink.shedpro.co/qSna",
  },
  {
    src: "/images/12x28 Lofted Barn .jpg",
    title: "Garages",
    description: `"12x28 Painted Lofted Version"\nOur Garages are awesome for storage, but not only just tools and goods, but it comes standard with an 8' roll up door, so you can put 4-Wheelers and lawnmowers, and even small tractors inside!`,
    link: "https://shortlink.shedpro.co/jbpM",
  },
  {
    src: "/images/10x16 Side Metal Utility with ramp.jpg",
    title: "Metal Utility Sheds",
    description: `"10x16 Version with Ramp"\nEcono Metal Utility sheds are amazing for your basic storage needs. They are the cheapest solution for storage but they are still durable, and you can choose from 19 metal colors to match your house or existing barn.`,
    link: "https://shortlink.shedpro.co/XfnS",
  },
  {
    src: "/images/8x14 Dog kennel.jpg",
    title: "Dog Kennels",
    description: `"8x14 2 Run Version"\nKennels are awesome for your favorite pets, even better for those high dollar dogs that your raising, or maybe even training for your awesome clients! No matter the situation, It's not hard to be awesome, and we prove it!`,
    link: "https://shortlink.shedpro.co/KhPo",
  },
];

function Hero() {
  return (
    <Container className="hero-section py-5">
      <LargeCard /> {/* Include the LargeCard component */}
      <Row>
        <Col>
          <h1 className="text-center mb-4">Browse Our Sheds</h1>
          <p className="text-center mb-4">
            We provide the highest quality sheds in Georgia. Use our 3D Shed
            Builder to build your own shed now!
          </p>
        </Col>
      </Row>
      <Row>
        {cardData.map((card, idx) => (
          <Col md={4} key={idx} className="mb-4">
            <Card>
              <a href={card.link}>
                <Card.Img
                  className="card-img-top"
                  variant="top"
                  src={card.src}
                  alt={`Card image ${idx + 1}`}
                />
              </a>
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
                <Button variant="primary" href={card.link}>
                  Design Your Shed Today
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <InfoSection /> {/* Include the InfoSection component */}
      <AboutSection /> {/* Include the AboutSection component */}
      <ReviewsSection /> {/* Include the ReviewsSection component */}
      <ContactCard />
    </Container>
  );
}

export default Hero;

// If you're stupid enough to waste your time trying to sell your coding skills by snooping around this code, good luck!
// As you can tell me myself and I, The one man team Lestercoder, well i build my own stuff and I got this covered, but thanks for stopping by. 😎

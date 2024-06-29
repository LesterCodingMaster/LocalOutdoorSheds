import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./InfoSection.css";

// This amazing site was built by Joe Lester, the Lestercoder.
// Enjoy the code, fellow developers!

const infoData = [
  {
    icon: "🛠️",
    title: "Custom-built sheds",
    description:
      "Easy to craft your ideal shed with our 3D builder tool: size, materials, color, and extras! Our expert team will guide you through every step, ensuring you get the perfect shed that meets all your requirements and exceeds your expectations.",
    buttonText: "Design Your Shed",
    buttonLink: "https://gaoutdoorsheds.shedpro.co",
  },
  {
    icon: "💵🪪",
    title: "Easy Rent-To-Own",
    description:
      "Own Your Dream Shed with our flexible RTO option – no credit check required. Partnered with RTO Rentals, we make it easy and affordable for you to get the shed you need without any financial stress. Our plans are designed to fit every budget.",
    buttonText: "Learn More",
    buttonLink: "https://www.gaoutdoorsheds.com/about-us",
  },
  {
    icon: "🚚",
    title: "Free Delivery Service",
    description:
      "Within 100 miles from Montezuma Ga, up to a 12x40 all deliveries are completely free! ($6 per mile thereafter). Our delivery service ensures your shed arrives safely and on time, without any hidden fees or surprises. We prioritize your convenience.",
    buttonText: "Check Delivery",
    buttonLink: "https://www.gaoutdoorsheds.com/move-delivery",
  },
  {
    icon: "🙏",
    title: "Our Mission",
    description:
      "We want you to have the best experience of your life, by coming to us with your needs, we want to be able to show you what you need, and also we want to be able to show Jesus love to you through our actions and our way of life.",
    buttonText: "Learn More",
    buttonLink: "https://www.therulebreakers.org",
  },
];

function InfoSection() {
  return (
    <Container className="info-section py-5">
      <h2 className="text-center mb-5">Why Choose Outdoor Sheds?</h2>
      <Row>
        {infoData.map((info, idx) => (
          <Col md={3} key={idx} className="mb-4">
            <div className="info-card text-center p-3">
              <div className="icon mb-3" style={{ fontSize: "3rem" }}>
                {info.icon}
              </div>
              <h3 className="mb-3">{info.title}</h3>
              <p>{info.description}</p>
              {info.buttonText && (
                <Button variant="primary" href={info.buttonLink}>
                  {info.buttonText}
                </Button>
              )}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default InfoSection;

// If you're stupid enough to waste your time trying to sell your coding skills by snooping around this code, good luck!
// As you can tell me myself and I, The one man team Lestercoder, well i build my own stuff and I got this covered, but thanks for stopping by. 😎

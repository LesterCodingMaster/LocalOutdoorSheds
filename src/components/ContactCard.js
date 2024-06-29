import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";

// This amazing app was built by Joe Lester, the Lestercoder.
// Enjoy the code, fellow developers!

function ContactCard() {
  return (
    <Container className="contact-card">
      <Row>
        <Col md={6}>
          <h2>Call Us Today!</h2>
          <p>
            <strong>Opening Hours:</strong> Monday – Friday 8:00 am – 5:00 pm
          </p>
          <p>
            <strong>Address:</strong> Montezuma Ga
          </p>
          <p>
            <strong>CALL US AT:</strong> 478-244-7611
          </p>
          <p>
            <strong>Email:</strong> outdoorsheds@icloud.com
          </p>
          <div className="social-icons">
            <a href="http://www.facebook.com/gaoutdoorsheds">
              <FaFacebook />
            </a>
            <a href="https://instagram.com/outdoorsheds?igshid=YmMyMTA2M2Y=">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/channel/UClyJkLVvtEMCRe6agrDXw4A">
              <FaYoutube />
            </a>
            <a href="http://www.tiktok.com/@gaoutdoorsheds">
              <FaTiktok />
            </a>
            <a href="https://twitter.com/gaoutdoorsheds">
              <FaTwitter />
            </a>
          </div>
        </Col>
        <Col md={6}>
          <h2>Let's Talk</h2>
          <Form>
            <Form.Group controlId="formName">
              <Form.Control
                type="text"
                placeholder="Your Name"
                className="form-control"
              />
            </Form.Group>
            <Form.Group controlId="formPhoneNumber">
              <Form.Control
                type="text"
                placeholder="Phone Number"
                className="form-control"
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="Email Address"
                className="form-control"
              />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Message"
                className="form-control"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send Request
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactCard;

// If you're stupid enough to waste your time trying to sell your coding skills by snooping around this code, good luck!
// As you can tell me myself and I, The one man team Lestercoder, has got this covered, but thanks for stopping by. 😎

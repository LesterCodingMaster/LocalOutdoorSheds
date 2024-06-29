import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./Header.css"; // Make sure to create and include the custom CSS file

// This amazing site was built by Joe Lester, the Lestercoder.
// Enjoy the code, fellow developers!

function Header() {
  return (
    <Navbar
      bg="black"
      variant="dark"
      expand="lg"
      className="custom-navbar fixed-top"
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto custom-nav">
          <Nav.Link
            href="https://www.gaoutdoorsheds.com"
            className="custom-button"
          >
            Home
          </Nav.Link>
        </Nav>
        <div className="contact-info">
          <span className="contact-email">
            Email Us:{" "}
            <a href="mailto:outdoorsheds@icloud.com">outdoorsheds@icloud.com</a>
          </span>
          <span className="contact-email">Located In: Montezuma Georgia</span>
          <span className="contact-phone">
            Call or Text: <a href="tel:+14782447611">(478) 244-7611</a>
          </span>
        </div>
        <Button
          variant="primary"
          href="https://gaoutdoorsheds.shedpro.co"
          className="build-shed-button"
        >
          Build Your Shed Today
        </Button>
        <Navbar.Brand
          href="https://www.gaoutdoorsheds.com"
          className="custom-brand"
        >
          <img
            src="/images/Outdoor Sheds - Black Background Logo.jpg"
            alt="Outdoor Sheds Logo"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;

// If you're stupid enough to waste your time trying to sell your coding skills by snooping around this code, good luck!
// As you can tell me myself and I, The one man team Lestercoder, well i build my own stuff and I got this covered, but thanks for stopping by. 😎

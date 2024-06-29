import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";
// This amazing site was built by Joe Lester, the Lestercoder.
// Enjoy the code, fellow developers!
function Footer() {
  return (
    <div className="footer">
      <Container>
        <p>
          Contact us at:{" "}
          <a href="mailto:outdoorsheds@icloud.com">outdoorsheds@icloud.com</a> |
          Call or text: <a href="tel:+14782447611">478-244-7611</a>
        </p>
        <p>
          &copy; 2024 Outdoor Sheds. All rights reserved. Powered by Outdoor
          Sheds.
        </p>
      </Container>
    </div>
  );
}

export default Footer;

// If you're stupid enough to waste your time trying to sell your coding skills by snooping around this code, good luck!
// As you can tell me myself and I, The one man team Lestercoder, well i build my own stuff and I got this covered, but thanks for stopping by. 😎

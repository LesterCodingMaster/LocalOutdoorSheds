// This amazing site was built by Joe Lester, the Lestercoder.
// Enjoy the code, fellow developers!

import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./ReviewsSection.css";

const reviews = [
  {
    text: "Professionalism, Punctuality, Responsiveness, Value Great company! Joe was very professional and made sure that I was happy. I would recommend Outdoor Sheds and will use them again!",
    author: "Suzie Headley",
    rating: 5,
  },
  {
    text: "We love our new outbuilding!! Joe did an amazing job putting it in place and making sure it was level. What a great experience from choosing the building and colors to delivery!! Thank you Joe!",
    author: "Teresa Sinteff",
    rating: 5,
  },
  {
    text: "Professional, Courteous and an overall Phenomenal experience. I Cannot recommend Outdoor Sheds highly enough and we look forward to continuing to do business with you going forward!",
    author: "Christain",
    rating: 5,
  },
  {
    text: "I can't say enough about this experience, I needed my shed moved and he came and got it moved so quickly!! If I could give 100 stars I would, customer service was amazing,, best experience ever.😊😊",
    author: "Tasha",
    rating: 5,
  },
  {
    text: "Best service I’ve ever used and don’t plan to use anyone else unless they go out of business. Excellent job and made sure it was done correctly and to my liking!",
    author: "Kyle Woodard",
    rating: 5,
  },
  {
    text: "Joe was a pleasure to work with. Joe showed up exactly when he said he would and charged exactly what he had quoted me. Joe moved the building, placed it where we wanted it and leveled it to perfection. I would highly recommend!",
    author: "Joe Harvey",
    rating: 5,
  },
  {
    text: "They are extremely professional and their attention to detail and willingness to get my shed placed exactly where I wanted was exceptional. If I even need it moved again I’ll be call them.",
    author: "Anthony Cooper",
    rating: 5,
  },
  {
    text: "I had Mr. Lester move a building for me and I must say he was a very nice and genuine guy. He was what I would say a very reasonably priced and dedicated guy to his job he seen what I had and didn’t bat an eye he jumped straight into it and with him being a one man team it didn’t take him anytime to get it done. I would recommend him to anyone. Give him a call and I can guarantee you will not regret it.",
    author: "Adam Clark",
    rating: 5,
  },
  {
    text: "Excellent service from Joe at Outdoor Sheds! He responds in a timely manner and is very professional. I will definitively use Outdoor Sheds services in the future!",
    author: "Smey Meas",
    rating: 5,
  },
  {
    text: "Joe was professional at his job. Took the time to make sure the job was done the right way. Anyone wanting to move an outdoor shed and have it set up , Joe Lester and Outdoor Sheds are the first ones to call. Thanks Joe",
    author: "Ken Myers",
    rating: 5,
  },
  {
    text: "Outdoor Sheds is definitely the people to do business with. As professional as it gets and very fast moving service. Not to mention they are the cheapest around. Very satisfied. Will 100% use them and refer them from here on out.",
    author: "Ty Johnson",
    rating: 5,
  },
  {
    text: "Very patient! Ontime! Professional! Communication skills 100%!",
    author: "Theartis Burnett",
    rating: 5,
  },
  {
    text: "Joe was great!! Very polite and Professional I will recommend him and use his company again for sure in the future!!",
    author: "DeWayne Heard",
    rating: 5,
  },
  {
    text: "Starting with the initial call inquiring on moving our building through the final hand shake after the building was placed was so easy. Quick response time and very professional. They have a professional attitude about their work and they really care about doing a good job for you. I highly recommend Outdoor Sheds.",
    author: "Brandon Benefield",
    rating: 5,
  },
  {
    text: "What a nice experience this was!! We ordered our kennel then kept changing our minds on features, colors etc…. All of the conversations were met with patience kindness and professionalism. And our kennel is beautiful and quality built. As a professional dog breeder this was an important purchase.We could not be more pleased with how everything turned out. Delivery was prompt and placement of the kennel was perfect!! Thank you so much!!",
    author: "Adam Clark",
    rating: 5,
  },
];

function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

const chunkedReviews = chunkArray(reviews, 2);

function ReviewsSection() {
  return (
    <Container className="reviews-section py-5">
      <h2 className="text-center mb-5">
        What Is Our Clients Saying About Us ?
      </h2>
      <Carousel>
        {chunkedReviews.map((reviewPair, idx) => (
          <Carousel.Item key={idx} interval={3000}>
            <Row className="justify-content-center">
              {reviewPair.map((review, reviewIdx) => (
                <Col md={5} key={reviewIdx} className="mb-4">
                  <div className="review-card p-4">
                    <p className="review-text">“{review.text}”</p>
                    <p className="review-author">
                      <strong>{review.author}</strong>
                    </p>
                    <div className="review-rating">
                      {Array(review.rating)
                        .fill()
                        .map((_, i) => (
                          <span key={i} className="star">
                            ★
                          </span>
                        ))}
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default ReviewsSection;

// If you're stupid enough to waste your time trying to sell your coding skills by snooping around this code, good luck!
// As you can tell me myself and I, The one man team Lestercoder, well i build my own stuff and I got this covered, but thanks for stopping by. 😎

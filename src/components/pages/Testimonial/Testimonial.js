import React from "react";
import "./testimonial.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Testimonial() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Testimonial - Internedge Website</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </HelmetProvider>
      <div className="testimonial page-header">
        <div className="page-heading text-center text-light">
          <h1>Testimonial</h1>
        </div>
      </div>
      <div className="container ">
        <div className="testimonial-head">
          <h1>Our Students Say!</h1>
        </div>
        <div className="container-carousel">
          <Carousel id="carousel-h">
            <Carousel.Item className="flex-carousel">
              <Card className="testimonial-card" style={{ width: "18rem" }}>
                <div className="card-imgs">
                  <img src="./images/testimonial-1.jpg" alt="" />
                </div>
                <Card.Body>
                  <Card.Title> Client Name</Card.Title>
                  <p>Profession</p>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item className="flex-carousel">
              <Card className="testimonial-card " style={{ width: "18rem" }}>
                <div className="card-imgs">
                  <img src="./images/testimonial-2.jpg" alt="" />
                </div>
                <Card.Body>
                  <Card.Title>Client Name</Card.Title>
                  <p>Profession</p>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item className="flex-carousel">
              <Card className="testimonial-card " style={{ width: "18rem" }}>
                <Card.Body>
                  <div className="card-imgs">
                    <img src="./images/testimonial-3.jpg" alt="" />
                  </div>
                  <Card.Title>Client Name</Card.Title>
                  <p>Profession</p>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item className="flex-carousel">
              <Card className="testimonial-card " style={{ width: "18rem" }}>
                <Card.Body>
                  <div className="card-imgs">
                    <img src="./images/testimonial-1.jpg" alt="" />
                  </div>
                  <Card.Title>Client Name</Card.Title>
                  <p>Profession</p>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}

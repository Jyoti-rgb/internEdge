import React from "react";
import "./testimonial.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

export default function Testimonial() {
  return (
    <>
      <div className="testimonial page-header">
        <div className="tm-heading text-center text-light">
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
              <Card style={{ width: "18rem" }}>
                <div className="card-img">
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
              <Card style={{ width: "18rem" }}>
                <div className="card-img">
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
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <div className="card-img">
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
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <div className="card-img">
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

import React from "react";
import "./home.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import skills from "./skills";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home - Internedge Website</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img
              className="homeCarousel-img"
              src="./images/carousel-1.jpg"
              alt=""
            />
            <Carousel.Caption className="caption">
              <h1 className="carousal-heading">
                Welcome to Internedge - Your Pathway to Professional Success
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="homeCarousel-img"
              src="./images/carousel-2.jpg"
              alt=""
            />
            <Carousel.Caption>
              <h1 className="carousal-heading">
                Enhance Your Skills and Network
              </h1>
              <p className="carousal-p">
                Boost your career with our skill development workshops and
                networking events. Learn from industry experts, enhance your
                professional skills, and build a robust network to support your
                career growth.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="caroual-item">
            <img
              className="homeCarousel-img"
              src="./images/carousel-1.jpg"
              alt=""
            />
            <Carousel.Caption>
              <h1 className="carousal-heading">
                Personalized Mentorship for Your Growth
              </h1>
              <p className="carousal-p">Get Guided by Experts</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* servcie section */}

      <div className="container text-center">
        <div className="service-head">
          <h1>Services</h1>
        </div>

        <div className="service">
          <div className="row">
            {skills.map((item) => (
              <div key={item.id} className="col-sm-3">
                <Card className="card">
                  <div className="service-icon">
                    <i class={item.icon}></i>
                  </div>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Course Section*/}
      <div className="container t-b-m ">
        <div className="courses text-center">
          <h1>Popular Courses</h1>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <Card>
              <Card.Body>
                <img
                  className="course-img"
                  src="./images/course-1.jpg"
                  alt=""
                />
                <h1>$149.00</h1>
                <p>Web Design & Development Course for Beginners</p>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-4">
            <Card>
              <Card.Body>
                <img
                  className="course-img"
                  src="./images/course-2.jpg"
                  alt=""
                />
                <h1>$149.00</h1>
                <p>Web Design & Development Course for Beginners</p>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-4">
            <Card>
              <Card.Body>
                <img
                  className="course-img"
                  src="./images/course-3.jpg"
                  alt=""
                />
                <h1>$149.00</h1>
                <p>Web Design & Development Course for Beginners</p>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      {/* About section */}

      <div className="container text-center">
        <h1>About Us</h1>
        <div className="row about">
          <div className="col-sm-6">
            <img className="about-img" src="./images/about.jpg" alt="" />
          </div>
          <div className="col-sm-6 text-start">
            <h1>Welcome to Internedge</h1>
            <p>
              At Internedge, we are passionate about bridging the gap between
              ambitious interns and the professional world. Founded with the
              vision to empower the next generation of professionals, we strive
              to provide unmatched opportunities, resources, and support to help
              you succeed.
            </p>
            <h3>Our Mission</h3>
            <p>
              Our mission is to create a platform that offers unparalleled
              support and resources to interns. We aim to provide exclusive
              internship opportunities, personalized mentorship, and
              comprehensive skill development programs that prepare you for a
              successful career.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

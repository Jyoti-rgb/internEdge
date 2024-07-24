import React from "react";
import "./home.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import skills from "./skills";
import Slider from "react-slick";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,

    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home - Internedge Website</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </HelmetProvider>
      {/* Main Section */}
      <section>
        <div className="home">
          <h1> Welcome to Internedge - Your Pathway to Professional Success</h1>
          <p>
            Boost your career with our skill development workshops and
            networking events. Learn from industry experts, enhance your
            professional skills, and build a robust network to support your
            career growth.
          </p>
          <div className="home-btn">
            <a className="blue" href="#">
              Learn More
            </a>
            <a className="yellow" href="#">
              Visit Course
            </a>
          </div>
        </div>
      </section>
      {/* servcie section */}
      <div className="container text-center">
        <div className="service">
          <h1>Services</h1>
        </div>

        <div className="row service">
          {skills.map((item) => (
            <div key={item.id} className="col-sm-3 col-md-3">
              <Card className="skill-card">
                <div className="service-icon">
                  <i className={item.icon}></i>
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
      {/* Course Section*/}
      <div className="container t-b-m ">
        <div className="courses text-center">
          <h1>Popular Courses</h1>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <Card className="course-card">
              <img className="course-img" src="./images/course-1.jpg" alt="" />
              <Card.Body>
                <h1>$149.00</h1>
                <p>Web Design & Development Course for Beginners</p>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-4">
            <Card className="course-card">
              <img className="course-img" src="./images/course-2.jpg" alt="" />
              <Card.Body>
                <h1>$149.00</h1>
                <p>Web Design & Development Course for Beginners</p>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-4">
            <Card className="course-card">
              <img className="course-img" src="./images/course-3.jpg" alt="" />
              <Card.Body>
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

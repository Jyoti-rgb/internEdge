import React from "react";
import "./internship.css";
import Carousel from "react-bootstrap/Carousel";
import { Helmet } from "react-helmet";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Internship() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Internship - Internedge Website</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="internship page-header">
        <div className="page-heading  ">
          <h1>Internship Opportunities</h1>
        </div>
      </div>
      <div className="container-fluid kick-section">
        <div className="row">
          <div className="col-sm-6">
            <div className="text-center">
              <h1>
                Kickstart Your Career with Exclusive Internship Opportunities!
              </h1>
              <p className="kick-content">
                At Internedge, we are committed to providing you with exclusive
                internship opportunities at leading companies. Our internships
                are crafted to give you real-world experience, professional
                growth, and a competitive edge in the job market.
              </p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="kick-img">
              <img src="./images/student.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container con-slider">
        <div className="text-center">
          <h1 className="plc-head">Placement guarantee courses</h1>
          <h3>The Right Course For You</h3>
        </div>
        <div className="placement-course">
          <Slider {...settings}>
            <div className="slider-card">
              <Card style={{ width: "22rem", marginLeft: "0px 20px" }}>
                <div className="img-container">
                  <Card.Img
                    className="card-img"
                    variant="top"
                    src="./images/data-science.jpg"
                  />
                </div>
                <Card.Body>
                  <Card.Title>Digital Markiting</Card.Title>
                  <Card.Text>
                    <div className="duration">6 months course</div>
                    <div className="star">5 star</div>
                    <div className="salary">4LPA salary</div>
                    <div className="start">2 Lac jobs/opportunity</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="slider-card">
              <Card style={{ width: "22rem" }}>
                <div className="img-container">
                  <Card.Img
                    className="card-img"
                    variant="top"
                    src="./images/fullstack.png"
                  />
                </div>
                <Card.Body>
                  <Card.Title>FullStack Developer</Card.Title>
                  <Card.Text>
                    <div className="duration">6 months course</div>
                    <div className="star">5 star</div>
                    <div className="salary">4LPA salary</div>
                    <div className="start">2 Lac jobs/opportunity</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="slider-card">
              <Card style={{ width: "22rem" }}>
                <div className="img-container">
                  <Card.Img
                    className="card-img"
                    variant="top"
                    src="./images/BD.jpeg"
                  />
                </div>
                <Card.Body>
                  <Card.Title>Backend Developer</Card.Title>
                  <Card.Text>
                    <div className="duration">6 months course</div>
                    <div className="star">5 star</div>
                    <div className="salary">4LPA salary</div>
                    <div className="start">2 Lac jobs/opportunity</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="slider-card">
              <Card style={{ width: "22rem" }}>
                <div className="img-container">
                  <Card.Img
                    className="card-img"
                    variant="top"
                    src="./images/data-science.jpg"
                  />
                </div>
                <Card.Body>
                  <Card.Title>Data Science</Card.Title>
                  <Card.Text>
                    <div className="duration">6 months course</div>
                    <div className="star">5 star</div>
                    <div className="salary">4LPA salary</div>
                    <div className="start">2 Lac jobs/opportunity</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="slider-card">
              <Card style={{ width: "22rem" }}>
                <div className="img-container">
                  <Card.Img
                    className="card-img"
                    variant="top"
                    src="./images/FD.png"
                  />
                </div>
                <Card.Body>
                  <Card.Title>Frontend Developer</Card.Title>
                  <Card.Text>
                    <div className="duration">6 months course</div>
                    <div className="star">5 star</div>
                    <div className="salary">4LPA salary</div>
                    <div className="start">2 Lac jobs/opportunity</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="slider-card">
              <Card style={{ width: "22rem" }}>
                <div className="img-container">
                  <Card.Img
                    className="card-img"
                    variant="top"
                    src="./images/DM.jpeg"
                  />
                </div>
                <Card.Body>
                  <Card.Title>Digital Markiting</Card.Title>
                  <Card.Text>
                    <div className="duration">6 months course</div>
                    <div className="star">5 star</div>
                    <div className="salary">4LPA salary</div>
                    <div className="start">2 Lac jobs/opportunity</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Slider>

          {/* <div className="col-sm-4 plc-card">
              <div className="plc-course-img">
                <img src="./images/BD.jpeg" alt="" />
              </div>
              <div className="body">
                <h3>Digital Markiting</h3>
                <ul className="highlight">
                  <li>8 months Course</li>
                  <li>Confirmed 4LPA salary</li>
                  <li>2 Lac jobs/opportunity</li>
                </ul>
              </div>{" "}
            </div>  
          </div>*/}
        </div>
      </div>
      <div className="container placement">
        <div className="row">
          <div className="col-sm-6">
            <h1>Placement at Internedge</h1>
            <p className="set-font">
              Achieve Your Career Goals with Internedge
            </p>
            <p>
              At Internedge, we are dedicated to helping you transition from
              internship to employment. Our placement services are designed to
              provide you with the support and resources needed to secure a
              full-time position in your chosen field. Explore how we can help
              you achieve your career aspirations.
            </p>
          </div>
          <div className="col-sm-6">
            <div class="app">
              <div class="tag-list">
                <div
                  class="loop-slider"
                  style={{ "--duration": "15951ms", "--direction": "normal" }}
                >
                  <div class="inner">
                    <div class="tag">
                      <img className="tag-img" src="./images/pytm.png" alt="" />
                    </div>
                    <div class="tag">
                      <img
                        className="tag-img"
                        src="./images/freecharge.png
                    "
                        alt=""
                      />
                    </div>
                    <div class="tag">
                      <img
                        className="tag-img"
                        src="./images/indiamart.png"
                        alt=""
                      />
                    </div>
                    <div class="tag">
                      <img
                        className="tag-img"
                        src="./images/neustar.png"
                        alt=""
                      />
                    </div>
                    <div class="tag">
                      <img className="tag-img" src="./images/tata.png" alt="" />
                    </div>
                    <div class="tag">
                      <img
                        className="tag-img"
                        src="./images/visa.jpeg"
                        alt=""
                      />
                    </div>
                    <div class="tag">
                      <img
                        className="tag-img"
                        src="./images/walmart.png"
                        alt=""
                      />
                    </div>
                    <div class="tag">
                      <img className="tag-img" src="./images/hcl.png" alt="" />
                    </div>
                    <div class="tag">
                      <img
                        className="tag-img"
                        src="./images/maersk.png"
                        alt=""
                      />
                    </div>
                    <div class="tag">
                      <img
                        className="tag-img"
                        src="./images/makemytrip.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="loop-slider"
                  style={{ "--duration": "19260ms", "--direction": "reverse" }}
                >
                  <div class="inner">
                    <div class="tag">
                      <img
                        className="tag-img"
                        src="./images/mystifly.png"
                        alt=""
                      />
                    </div>
                    <div class="tag">
                      <img
                        className="tag-img"
                        src="./images/neustar.png"
                        alt=""
                      />
                    </div>
                    <div class="tag">
                      <img className="tag-img" src="./images/ola.png" alt="" />
                    </div>
                    <div class="tag">
                      <img
                        className="tag-img"
                        src="./images/optum.png"
                        alt=""
                      />
                    </div>
                    <div class="tag">
                      <img
                        className="tag-img"
                        src="./images/park+.png"
                        alt=""
                      />
                    </div>
                    <div class="tag">
                      <img className="tag-img" src="./images/pytm.png" alt="" />
                    </div>
                    <div class="tag">
                      <img
                        className="tag-img"
                        src="./images/maersk.png"
                        alt=""
                      />
                    </div>
                    <div class="tag">
                      <img
                        className="tag-img"
                        src="./images/celebel.jpeg"
                        alt=""
                      />
                    </div>
                    <div class="tag">
                      <img
                        className="tag-img"
                        src="./images/airtel.png"
                        alt=""
                      />
                    </div>
                    <div class="tag">
                      <img
                        className="tag-img"
                        src="./images/capgemini.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="loop-slider"
                  style={{ "--duration": "10449ms", "--direction": "normal" }}
                >
                  <div class="inner">
                    <div class="tag">
                      <img className="tag-img" src="./images/ola.png" alt="" />
                    </div>
                    <div class="tag">
                      <img className="tag-img" src="./images/hcl.png" alt="" />
                    </div>
                    <div class="tag">
                      <img
                        className="tag-img"
                        src="./images/makemytrip.png"
                        alt=""
                      />
                    </div>
                    <div class="tag">
                      <img
                        className="tag-img"
                        src="./images/airtel.png"
                        alt=""
                      />
                    </div>
                    <div class="tag">
                      <img
                        className="tag-img"
                        src="./images/neustar.png"
                        alt=""
                      />
                    </div>
                    <div class="tag">
                      <img
                        className="tag-img"
                        src="./images/optum.png"
                        alt=""
                      />
                    </div>
                    <div class="tag">
                      <img
                        className="tag-img"
                        src="./images/park+.png"
                        alt=""
                      />
                    </div>
                    <div class="tag">
                      <img
                        className="tag-img"
                        src="./images/visa.jpeg"
                        alt=""
                      />
                    </div>
                    <div class="tag">
                      <img
                        className="tag-img"
                        src="./images/walmart.png"
                        alt=""
                      />
                    </div>
                    <div class="tag">
                      <img
                        className="tag-img"
                        src="./images/verifone.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

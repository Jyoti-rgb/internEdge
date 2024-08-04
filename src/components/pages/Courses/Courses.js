import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./courses.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "react-bootstrap/Card";
import data from "./data.js";

export default function Courses() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          spaceBetween: 30,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          spaceBetween: 10,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          spaceBetween: 8,
        },
      },
    ],
  };
  return (
    <>
      <div className="hiring-container">
        <div className="hire-wrap">
          <div className="row w-100">
            <div className="col-sm-6">
              <div className="hire-heading">
                <h1>
                  Advance Your Career <br />
                  With Certified Experience
                </h1>
                <p>
                  Participate in our internships to gain valuable experience,
                  earn certificates, and be among the 50+ hires who have
                  achieved career success. Start your professional journey with
                  us!
                </p>
              </div>
              <div className="ready-btn mt-4 mb-4">
                <button>Know more</button>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="row hiring-row">
                <div className="col-sm-6">
                  <form className="hiring-form">
                    <h3>Join Us Today</h3>
                    <p>
                      Enter your details to apply and become part of our dynamic
                      team.
                    </p>
                    <ul>
                      <li>
                        <div className="hiring-inputs">
                          <span className="m-r-15">
                            <i class="fa-regular fa-user"></i>
                          </span>
                          <input type="text" placeholder="FullName" />
                        </div>
                      </li>
                      <li>
                        <div className="hiring-inputs">
                          <span className="m-r-15">
                            <i class="fa-solid fa-phone"></i>
                          </span>
                          <input type="text" placeholder="Phone Number" />
                        </div>
                      </li>
                      <li>
                        <button className="apply-btn">Apply Now</button>
                      </li>
                    </ul>
                  </form>
                </div>
                <div className="col-sm-6 hiring-img">
                  <img src="/images/hiring1.jpeg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-slider">
        <h1 className="pt-5">Trending Courses</h1>
        <div className="container">
          <div className="card-list">
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              grabCursor={true}
              pagination={{
                clickable: true,
                el: ".swiper-pagination",
                type: "bullets",
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              modules={[Navigation, Pagination]}
              loop={true}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {data.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="card-image4 card-set">
                    <h3 className="course-name">{item.name}</h3>
                    <p className="course-rate">₹{item.fee}</p>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <span>({item.join})</span>
                    </div>
                    <button className="course-btn">Apply Now</button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </div>
      </div>

      <div className="container  ">
        <div className="placement">
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
              <div className="app">
                <div className="tag-list">
                  <div
                    className="loop-slider"
                    style={{ "--duration": "15951ms", "--direction": "normal" }}
                  >
                    <div className="inner">
                      <div className="tag">
                        <img
                          className="tag-img"
                          src="./images/pytm.png"
                          alt=""
                        />
                      </div>
                      <div className="tag">
                        <img
                          className="tag-img"
                          src="./images/freecharge.png
                    "
                          alt=""
                        />
                      </div>
                      <div className="tag">
                        <img
                          className="tag-img"
                          src="./images/indiamart.png"
                          alt=""
                        />
                      </div>
                      <div className="tag">
                        <img
                          className="tag-img"
                          src="./images/neustar.png"
                          alt=""
                        />
                      </div>
                      <div className="tag">
                        <img
                          className="tag-img"
                          src="./images/tata.png"
                          alt=""
                        />
                      </div>
                      <div className="tag">
                        <img
                          className="tag-img"
                          src="./images/visa.jpeg"
                          alt=""
                        />
                      </div>
                      <div className="tag">
                        <img
                          className="tag-img"
                          src="./images/walmart.png"
                          alt=""
                        />
                      </div>
                      <div className="tag">
                        <img
                          className="tag-img"
                          src="./images/hcl.png"
                          alt=""
                        />
                      </div>
                      <div className="tag">
                        <img
                          className="tag-img"
                          src="./images/maersk.png"
                          alt=""
                        />
                      </div>
                      <div className="tag">
                        <img
                          className="tag-img"
                          src="./images/makemytrip.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="loop-slider"
                    style={{
                      "--duration": "19260ms",
                      "--direction": "reverse",
                    }}
                  >
                    <div className="inner">
                      <div className="tag">
                        <img
                          className="tag-img"
                          src="./images/mystifly.png"
                          alt=""
                        />
                      </div>
                      <div className="tag">
                        <img
                          className="tag-img"
                          src="./images/neustar.png"
                          alt=""
                        />
                      </div>
                      <div className="tag">
                        <img
                          className="tag-img"
                          src="./images/ola.png"
                          alt=""
                        />
                      </div>
                      <div className="tag">
                        <img
                          className="tag-img"
                          src="./images/optum.png"
                          alt=""
                        />
                      </div>
                      <div className="tag">
                        <img
                          className="tag-img"
                          src="./images/park+.png"
                          alt=""
                        />
                      </div>
                      <div className="tag">
                        <img
                          className="tag-img"
                          src="./images/pytm.png"
                          alt=""
                        />
                      </div>
                      <div className="tag">
                        <img
                          className="tag-img"
                          src="./images/maersk.png"
                          alt=""
                        />
                      </div>
                      <div className="tag">
                        <img
                          className="tag-img"
                          src="./images/celebel.jpeg"
                          alt=""
                        />
                      </div>
                      <div className="tag">
                        <img
                          className="tag-img"
                          src="./images/airtel.png"
                          alt=""
                        />
                      </div>
                      <div className="tag">
                        <img
                          className="tag-img"
                          src="./images/capgemini.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="loop-slider"
                    style={{ "--duration": "10449ms", "--direction": "normal" }}
                  >
                    <div className="inner">
                      <div className="tag">
                        <img
                          className="tag-img"
                          src="./images/ola.png"
                          alt=""
                        />
                      </div>
                      <div className="tag">
                        <img
                          className="tag-img"
                          src="./images/hcl.png"
                          alt=""
                        />
                      </div>
                      <div className="tag">
                        <img
                          className="tag-img"
                          src="./images/makemytrip.png"
                          alt=""
                        />
                      </div>
                      <div className="tag">
                        <img
                          className="tag-img"
                          src="./images/airtel.png"
                          alt=""
                        />
                      </div>
                      <div className="tag">
                        <img
                          className="tag-img"
                          src="./images/neustar.png"
                          alt=""
                        />
                      </div>
                      <div className="tag">
                        <img
                          className="tag-img"
                          src="./images/optum.png"
                          alt=""
                        />
                      </div>
                      <div className="tag">
                        <img
                          className="tag-img"
                          src="./images/park+.png"
                          alt=""
                        />
                      </div>
                      <div className="tag">
                        <img
                          className="tag-img"
                          src="./images/visa.jpeg"
                          alt=""
                        />
                      </div>
                      <div className="tag">
                        <img
                          className="tag-img"
                          src="./images/walmart.png"
                          alt=""
                        />
                      </div>
                      <div className="tag">
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
      </div>

      <div className="container con-slider">
        <div className="text-center">
          <h1 className="plc-head">Placement guarantee courses</h1>
          <h3>The Right Course For You</h3>
        </div>
        <div className="row">
          <div className="col-sm-12 col-12">
            <div className="placement-course">
              <Slider {...settings}>
                <div className="slider-card">
                  <Card style={{ width: "19rem", marginLeft: "0px 20px" }}>
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
                  <Card style={{ width: "19rem" }}>
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
                  <Card style={{ width: "19rem" }}>
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
                  <Card style={{ width: "19rem" }}>
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
                  <Card style={{ width: "19rem" }}>
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
                  <Card style={{ width: "19rem" }}>
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
            </div>
          </div>
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
    </>
  );
}

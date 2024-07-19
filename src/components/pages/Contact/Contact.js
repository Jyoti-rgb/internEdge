import React from "react";
import { Helmet } from "react-helmet";
import "./contact.css";

export default function Contact() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact - Internedge Website</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="contact page-header">
        <div className="page-heading  ">
          <h1>Contact Us</h1>
        </div>
      </div>

      <div className="container">
        <div className="text-center mb-5 mt-5">
          <h1>Contact For Any Query</h1>
        </div>
        <div className="row">
          <div className="col-sm-4 contact-content">
            <div className="set-font">Get in Touch with Us</div>
            <div className="contact-info">
              <p>
                If you have any inquiries or need assistance, please fill out
                the form below, and our team will get back to you as soon as
                possible.
              </p>
              <ul>
                <li>
                  <div class="d-flex align-items-center mb-3">
                    <div class="list-item d-flex align-items-center justify-content-center flex-shrink-0 bg-primary">
                      <i class="fa fa-map-marker-alt text-white"></i>
                    </div>
                    <div class="ms-3">
                      <h5 class="text-primary">Office</h5>
                      <p class="mb-0">123 Street, New York, USA</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex align-items-center mb-3">
                    <div class="list-item d-flex align-items-center justify-content-center flex-shrink-0 bg-primary">
                      <i class="fa fa-phone-alt text-white"></i>
                    </div>
                    <div class="ms-3">
                      <h5 class="text-primary">Mobile</h5>
                      <p class="mb-0">+012 345 67890</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex align-items-center">
                    <div class="list-item d-flex align-items-center justify-content-center flex-shrink-0 bg-primary">
                      <i class="fa fa-envelope-open text-white"></i>
                    </div>
                    <div class="ms-3">
                      <h5 class="text-primary">Email</h5>
                      <p class="mb-0">info@example.com</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4  ">
            <iframe
              className="position-relative rounded"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.916494984592!2d-73.99300432507381!3d40.71985473713643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25986e83382ef%3A0xa944c13520a97e82!2s123%20Allen%20St%2C%20New%20York%2C%20NY%2010002%2C%20USA!5e0!3m2!1sen!2sin!4v1721109161842!5m2!1sen!2sin"
              title="internedge"
              allowFullScreen
              aria-hidden="false"
              style={{ minHeight: "475px", minWidth: "350px" }}
            ></iframe>
          </div>
          <div className="col-sm-4  ">
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                    />
                    <label for="name">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                    />
                    <label for="email">Your Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                    />
                    <label for="subject">Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      id="message"
                    ></textarea>
                    <label for="message">Message</label>
                  </div>
                </div>

                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

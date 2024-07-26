import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./howtowork.css";

export default function HowToWork() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>How-To-Work - Internedge Website</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </HelmetProvider>
      <div className="page-header">
        <div className="page-heading  ">
          <h1>How To Work</h1>
        </div>
      </div>
      <div className="container-fluid work-container">
        <div className="work text-center">
          <h1>How Internedge Works</h1>
        </div>
        <div class="how-to-work">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <div class="step-title">Sign Up for Free</div>
              <p class="step-description">
                Create your free account in minutes.
              </p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <div class="step-title">Create Your Profile</div>
              <p class="step-description">
                Complete your profile to showcase your skills.
              </p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <div class="step-title">Explore Listings</div>
              <p class="step-description">
                Browse internships tailored to your goals.
              </p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">4</div>
            <div class="step-content">
              <div class="step-title">Apply</div>
              <p class="step-description">
                Submit applications for your chosen internships.
              </p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">5</div>
            <div class="step-content">
              <div class="step-title">Get Shortlisted</div>
              <p class="step-description">Prepare for and attend interviews.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container choose">
        <div className="row">
          <div className="col-sm-6">
            <div className="choose-left">Why Choose Internedge?</div>
          </div>
          <div className="col-sm-6">
            <div className="choose-right">
              <ul>
                <li>
                  <strong>Exclusive Internships: </strong>Gain access to
                  internships at leading companies.
                </li>
                <li>
                  <strong>Professional Development: </strong>Enhance your skills
                  and gain hands-on experience.
                </li>
                <li>
                  <strong>Career Support: </strong>Receive guidance and support
                  throughout your internship journey.
                </li>
                <li>
                  <strong>Networking: </strong>Connect with industry
                  professionals and peers.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

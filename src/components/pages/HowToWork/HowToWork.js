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
        <div className="step">
          <div className="step-container">
            <ul>
              <li className="step-list">
                <div className="dot">1</div>
                <div className="step-des">
                  <h2> Sign Up for Free</h2>
                  <p>
                    Create your account on Internedge by filling out a simple
                    registration form. Signing up is quick, easy, and completely
                    free.
                  </p>
                </div>
              </li>
              <li className="step-list">
                <div className="dot">2</div>
                <div className="step-des">
                  <h2>Create Your Profile</h2>
                  <p>
                    Complete your profile by adding your personal details,
                    educational background, skills, and work experience. A
                    detailed profile helps us match you with the best internship
                    opportunities.
                  </p>
                </div>
              </li>
              <li className="step-list">
                <div className="dot">3</div>
                <div className="step-des">
                  <h2>Explore Internship Listings</h2>
                  <p>
                    Browse through our exclusive internship listings from top
                    companies across various industries. Use filters to narrow
                    down your search by location, industry, and duration.
                  </p>
                </div>
              </li>
              <li className="step-list">
                <div className="dot">4</div>
                <div className="step-des">
                  <h2>Apply for Internships</h2>
                  <p>
                    Find internships that match your interests and career goals.
                    Submit your application directly through our platform. Make
                    sure your resume and cover letter are tailored to the
                    internship you are applying for.
                  </p>
                </div>
              </li>
              <li className="step-list">
                <div className="dot">5</div>
                <div className="step-des">
                  <h2>Get Shortlisted and Interview</h2>
                  <p>
                    Find internships that match your interests and career goals.
                    Submit your application directly through our platform. Make
                    sure your resume and cover letter are tailored to the
                    internship you are applying for.
                  </p>
                </div>
              </li>
              <li className="step-list">
                <div className="dot">6</div>
                <div className="step-des">
                  <h2>Start Your Internship</h2>
                  <p>
                    Once you pass the interview, you will receive an offer
                    letter. Begin your internship journey, gain valuable
                    experience, and build your professional network.
                  </p>
                </div>
              </li>
              <li className="step-list">
                <div className="dot">7</div>
                <div className="step-des">
                  <h2>Receive Ongoing Support</h2>
                  <p>
                    During your internship, receive support from our team to
                    ensure a smooth and enriching experience. We provide
                    mentorship, feedback, and guidance throughout your
                    internship.
                  </p>
                </div>
              </li>
              <li className="step-list">
                <div className="dot">8</div>
                <div className="step-des">
                  <h2>Complete and Get Certified</h2>
                  <p>
                    Successfully complete your internship and receive a
                    certificate from Internedge. This certification will enhance
                    your resume and make you more attractive to future
                    employers.
                  </p>
                </div>
              </li>
              <li className="step-list">
                <div className="dot">9</div>
                <div className="step-des">
                  <h2>Placement Assistance</h2>
                  <p>
                    After your internship, take advantage of our placement
                    assistance services. We help you find full-time job
                    opportunities and guide you through the job application
                    process.
                  </p>
                </div>
              </li>
            </ul>
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

import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <>
      <div className="container-fluid footer">
        <div className="footer-container">
          <div className="row">
            <div className="col-sm-3">
              <h2>Quick Link</h2>
              <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms & Condition</li>
                <li>FAQs & Help</li>
              </ul>
            </div>
            <div className="col-sm-3">
              <h2>Contact</h2>
              <ul>
                <li>123 Street, New York, USA</li>
                <li>+012 345 67890</li>
                <li>info@example.com</li>
              </ul>
            </div>
            <div className="col-sm-3">
              <h2>Gallery</h2>
            </div>
            <div className="col-sm-3">
              <h2>Newsletter</h2>
              <p>Stay Updated with Internedge!</p>
              <p>
                Subscribe to our newsletter to receive the latest internship
                opportunities, career tips, and exclusive event invites directly
                in your inbox.
              </p>
              <input className="p-3 m-3" type="text" placeholder="Your Email" />
              <span>
                <button className="">signup</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

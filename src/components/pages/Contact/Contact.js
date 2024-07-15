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
      <div className="containter">
        <div className="row">
          <div className="col-sm-4 contact-content ">content</div>
          <div className="col-sm-4 map">map</div>
          <div className="col-sm-4">form</div>
        </div>
      </div>
    </>
  );
}

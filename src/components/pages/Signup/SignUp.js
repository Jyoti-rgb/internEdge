import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./signup.css";

export default function SignUp() {
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleCPasswordChange = (e) => setCPassword(e.target.value);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>SignUp - Internedge Website</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </HelmetProvider>
      <div className="signup-body">
        <div className="container ">
          <div className="center">
            <h1>Register</h1>
            <form>
              <div className="txt_field">
                <input type="text" name="name" required />
                <span></span>
                <label>Name</label>
              </div>
              <div className="txt_field">
                <input type="email" name="email" required />
                <span></span>
                <label>Email</label>
              </div>
              <div className="txt_field">
                <input
                  type="password"
                  name="password"
                  onChange={handlePasswordChange}
                  required
                />
                <span></span>
                <label>Password</label>
              </div>
              <div className="txt_field">
                <input
                  type="password"
                  name="cpassword"
                  required
                  onChange={handleCPasswordChange}
                />
                <span></span>
                <label>Confirm Password</label>
              </div>
              <input name="submit" type="Submit" value="Sign Up" />
              <div className="signup_link">
                Have an Account ?<Link to="/login">Login Here</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

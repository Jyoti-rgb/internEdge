import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./signup.css";
import axios from "axios";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/signup", {
        name,
        email,
        password,
        cpassword,
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
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
          <div className="form-center">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
              <div className="txt_field">
                <input
                  type="text"
                  name="name"
                  value={name}
                  required
                  autoComplete="name"
                  onChange={(e) => setName(e.target.value)}
                />
                <span></span>
                <label>Name</label>
              </div>
              <div className="txt_field">
                <input
                  type="email"
                  name="email"
                  value={email}
                  required
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span></span>
                <label>Email</label>
              </div>
              <div className="txt_field">
                <input
                  type="password"
                  name="password"
                  value={password}
                  autoComplete="new-password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span></span>
                <label>Password</label>
              </div>
              <div className="txt_field">
                <input
                  type="password"
                  name="cpassword"
                  value={cpassword}
                  required
                  autoComplete="new-password"
                  onChange={(e) => setCPassword(e.target.value)}
                />
                <span></span>
                <label>Confirm Password</label>
              </div>
              <input name="submit" type="Submit" value="Sign Up" />
              <div className="signup_link">
                Already have an account ?<Link to="/login">Login Here</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

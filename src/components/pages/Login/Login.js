import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./login.css";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Login - Internedge Website</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </HelmetProvider>
      <div className="login-body">
        <div className="container ">
          <div className="form-center">
            <h1>Login</h1>
            <form>
              <div className="txt_field">
                <input
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={handleEmailChange}
                />
                <span></span>
                <label>Email</label>
              </div>
              <div className="txt_field">
                <input
                  type="password"
                  name="password"
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <span></span>
                <label>Password</label>
              </div>

              <input name="submit" type="Submit" value="Login" />
              <div className="signup_link">
                Have an Account ?<Link to="/signup">Create Account Here</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

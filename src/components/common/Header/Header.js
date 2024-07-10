import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [navList, setNavList] = useState(false);
  return (
    <>
      <header>
        <div className="container header">
          <div className="logo">
            <span className="logo-title">Intern</span>
            <img
              src="./images/logo.jpg
            "
              alt=" "
            />
            <span className="logo-title">EDGE</span>
          </div>
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/internship">Internship</Link>
              </li>
              <li>
                <Link to="/how-to-work">How-to-work</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/SignIn">Sign Up</Link>
              </li>
            </ul>
          </div>
          <div className="button">
            <Link to="/signin">
              <button className="btn1">
                <i className="fa fa-sign-out"></i>Sign Up
              </button>
            </Link>
          </div>
          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? (
                <i className="fa fa-times"> </i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

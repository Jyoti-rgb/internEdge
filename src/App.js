import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/common/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/common/Footer/Footer";
import Testimonial from "./components/pages/Testimonial/Testimonial";
import Contact from "./components/pages/Contact/Contact";
import HowToWork from "./components/pages/HowToWork/HowToWork";
import SignUp from "./components/pages/Signup/SignUp";
import Login from "./components/pages/Login/Login";
import Courses from "./components/pages/Courses/Courses";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-to-work" element={<HowToWork />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/course" element={<Courses />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

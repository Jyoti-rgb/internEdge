import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/common/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/common/Footer/Footer";
import Internship from "./components/pages/Internship";
import HowToWork from "./components/pages/HowToWork";
import Contact from "./components/pages/Contact";
import Blog from "./components/pages/Blog";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/internship" element={<Internship />} />
            <Route path="/how-to-work" element={<HowToWork />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import Slider from "./slider";
import "./app.css";
import Footer from "./footer";

const Home = () => {
  return (
    <>
      <hr />
      <h2 className="home-header">Your home's best friend 🤝</h2>
      <hr />
      <Slider />;
      <Footer />
    </>
  );
};

export default Home;

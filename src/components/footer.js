import React from "react";
import "./app.css";

const Footer = () => {
  return (
    <div className="footer">
      &copy; Copyright
      <span className="yello"> HHS Constructions</span>{" "}
      {new Date().getFullYear()} <br />
      T:+1 647.938.2006 <br />
      Email : sukhdevdham57@gmail.com
      <div className="mylink">
        Created By{" "}
        <span>
          <a href="https://pritsingh123.github.io/">Prit</a>
        </span>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import "./app.css";

const Footer = () => {
  return (
    <div className="footer">
      &copy; Copyright
      <span className="yello"> HHS Constructions</span>{" "}
      {new Date().getFullYear()} <br />
      T:+1 647.9378.2006 <br />
      Email : hhsconstruction@gmail.com
    </div>
  );
};

export default Footer;

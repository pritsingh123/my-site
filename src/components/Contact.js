import React from "react";
import Footer from "./footer";
import "./app.css";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Map from "./Map";
import ListGroup from "react-bootstrap/ListGroup";
const Contact = () => {
  return (
    <div>
      <hr />
      <h2 className="home-header">
        Get In <span className="red">Touch</span> With Us
      </h2>
      <hr />
      <h3 className="about-headline">Let's Build Something Together👷</h3>
      <div className="contact-main">
        <div className="map-container">
          <Map />
        </div>
        <div className="contact-text">
          <h2 className="contact-header">Contact Us</h2>
          <div className="contact-contact-list">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <EmailIcon />
                <a href="mailto: abc@example.com">sukhdevdham57@gmail.com </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <LocationOnIcon />
                65 Miracle Trail
              </ListGroup.Item>
              <ListGroup.Item>
                <LocalPhoneIcon />
                51454540066
              </ListGroup.Item>
              <ListGroup.Item>
                <PhoneAndroidIcon />
                67617617888
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      </div>
      <hr />

      <Footer />
    </div>
  );
};

export default Contact;

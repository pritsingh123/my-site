import React from "react";
import "./app.css";
import img from "../media/image_26.jpg";
import ListGroup from "react-bootstrap/ListGroup";
import Footer from "./footer";
const About = () => {
  return (
    <>
      <hr />
      <h2 className="home-header">Check Us!! We are better than rest 😎.</h2>
      <hr />
      <h4 className="home-header">About HHS Constructions</h4>
      <div className="about-headline">
        Over the last 20 years, we’ve earned a reputation as a specialist in
        building and renovating sub-prime and high-end properties in central
        Toronto and the surrounding areas
      </div>
      <div className="about-content">
        <div className="about-img">
          <img className="about-inner-image" src={img} alt="aboutImg" />
        </div>
        <div className="about-content-inner">
          Because of our background, our depth of knowledge and expertise goes
          beyond construction.
        </div>
      </div>
      <hr />
      <div className="about-headline">
        We always look at what each client wants to get out of their project.
        Everything we do is designed to help you realise your investment whether
        it’s a residential or commercial property, or a larger development.
      </div>

      <div className="about-headline">
        People are at the heart of our business and everything is focused on
        doing the best for them and on building lasting relationships. That
        includes our team, our subcontractors, and most importantly of course –
        you, the customer.
      </div>
      <div className="about-bullets">
        <h4>Here is the List, what we Do</h4>
        <ListGroup variant="flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        </ListGroup>
      </div>
      <Footer />
    </>
  );
};

export default About;

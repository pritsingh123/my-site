import React from "react";
import Slider from "./slider";
import "./app.css";
import Footer from "./footer";
import Card from "react-bootstrap/Card";
import concreteImg from "../media/concrete_1.jpeg";
import stampingImg from "../media/stamping.jpeg";
import exposingImg from "../media/exposing.jpeg";
import fenceImg from "../media/fence.jpg";
import interlockImg from "../media/Interlocking.jpeg";
import sideEntranceImg from "../media/side-entrance.jpeg";
import basementImg from "../media/basement.jpg";
import renovationImg from "../media/renovation.jpeg";
import HandshakeIcon from "@mui/icons-material/Handshake";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Home = () => {
  const myArray = [
    {
      id: 1,
      img: concreteImg,
      title: "Concrete",
      text: "Whether you’re looking for expert asphalt services for a pot hole repair, or need work done on steps and ramps throughout your home, give us a call and let us help you. ",
    },
    {
      id: 2,
      img: stampingImg,
      title: "Stamping",
      text: "Stamped concrete is an easy and quick way to create beautiful, multi-dimensional walkways and patios that look similar to their more expensive counterparts, such as bricks, stones or pavers. ",
    },

    {
      id: 4,
      img: fenceImg,
      title: "Fence",
      text: "We specialize in fence building in Toronto and the GTA. Full privacy fences, semi-privacy, commercial, or residential, we do it all. Call today",
    },
    {
      id: 5,
      img: interlockImg,
      title: "Interlocking",
      text: "Whether It Is Your Front Yard Or Backyard, Interlocking Adds Value To The Overall Look. We Can Provide You With A Great Custom Interlocking To Fit Your Budget And Needs.",
    },
    {
      id: 6,
      img: sideEntranceImg,
      title: "Side Entrance",
      text: "If you’re planning to build or renovate an entrance to a basement, such as a below grade entrance or a side door, there are general provisions that regulate where you can build.",
    },
    {
      id: 7,
      img: basementImg,
      title: "Fisnised Basement",
      text: "Our own construction team will undertake the whole fit-out phase of the basement conversion project. The major benefit of our service is that you can work with a single team of specialists under one roof.",
    },
    {
      id: 8,
      img: renovationImg,
      title: "Full Renovation",
      text: "Refurbishing your home or office property is a step in the right direction especially when compared to outright demolition and rebuilding. ",
    },
    {
      id: 3,
      img: exposingImg,
      title: "Exposing",
      text: "Exposing is no longer a Big Deal, let's us handle this for you",
    },
  ];

  return (
    <>
      <hr />
      <h2 className="home-header">
        Your <span className="red">Home's</span> Best Friend 🤝
      </h2>
      <hr />
      <Slider />
      <div className="home-main-content">
        <hr />
        <div className="home-main-header center">
          <h2>
            <span className="red">What</span> We do!
          </h2>
        </div>
        <hr />
        <div className="home-main-cardholder">
          <Row xs={1} md={3} className="g-4">
            {myArray.map((card, idx) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src={card.img} />
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

import React from "react";
import img1 from "../media/image_12.jpg";
import { Carousel } from "react-bootstrap";
export const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;

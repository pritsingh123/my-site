import React from "react";
import img1 from "../media/image_26.jpg";
import img2 from "../media/image_35.jpg";
import img3 from "../media/image_16.jpg";
import img4 from "../media/image_1.jpg";
import img5 from "../media/image_34.jpg";
import img6 from "../media/image_9.jpg";

import { Carousel } from "react-bootstrap";

export const Slider = () => {
  return (
    <Carousel interval={1000}>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img4} alt="forth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img5} alt="fifth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img6} alt="sixth slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;

import React, { useState } from "react";
import "./gallary.css";
import CloseIcon from "@mui/icons-material/Close";
import Footer from "./footer";

const Gallary = () => {
  const data = [
    {
      id: 1,
      imgSrc: require("../media/image_1.jpg"),
    },
    {
      id: 2,
      imgSrc: require("../media/image_2.jpg"),
    },
    {
      id: 3,
      imgSrc: require("../media/image_3.jpg"),
    },
    {
      id: 5,
      imgSrc: require("../media/image_5.jpg"),
    },
    {
      id: 6,
      imgSrc: require("../media/image_6.jpg"),
    },
    {
      id: 7,
      imgSrc: require("../media/image_7.jpg"),
    },
    {
      id: 8,
      imgSrc: require("../media/image_8.jpg"),
    },
    {
      id: 34,
      imgSrc: require("../media/image_34.jpg"),
    },
    {
      id: 35,
      imgSrc: require("../media/image_35.jpg"),
    },
    {
      id: 9,
      imgSrc: require("../media/image_9.jpg"),
    },
    {
      id: 10,
      imgSrc: require("../media/image_10.jpg"),
    },
    {
      id: 11,
      imgSrc: require("../media/image_11.jpg"),
    },
    {
      id: 12,
      imgSrc: require("../media/image_12.jpg"),
    },
    {
      id: 14,
      imgSrc: require("../media/image_14.jpg"),
    },
    {
      id: 16,
      imgSrc: require("../media/image_16.jpg"),
    },

    {
      id: 21,
      imgSrc: require("../media/image_21.jpg"),
    },
    {
      id: 22,
      imgSrc: require("../media/image_22.jpg"),
    },
    {
      id: 26,
      imgSrc: require("../media/image_26.jpg"),
    },
    {
      id: 27,
      imgSrc: require("../media/image_28.jpg"),
    },
    {
      id: 29,
      imgSrc: require("../media/image_29.jpg"),
    },
    {
      id: 30,
      imgSrc: require("../media/image_30.jpg"),
    },
    {
      id: 31,
      imgSrc: require("../media/image_31.jpg"),
    },
    {
      id: 32,
      imgSrc: require("../media/image_32.jpg"),
    },
    {
      id: 33,
      imgSrc: require("../media/image_33.jpg"),
    },
    {
      id: 20,
      imgSrc: require("../media/image_20.jpg"),
    },
  ];
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} alt="img1"></img>
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <hr />
      <div className="gallary-header">
        <h2>
          Image <span className="red">Gallery</span>
        </h2>
      </div>
      <hr />
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div className="pics" key={index}>
              <img
                className="inner-image"
                src={item.imgSrc}
                style={{ width: "100%" }}
                alt={item.id}
                onClick={() => getImg(item.imgSrc)}
              ></img>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};
export default Gallary;

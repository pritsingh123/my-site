import React, { useState } from "react";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
import "./navbar.css";
import CloseIcon from "@mui/icons-material/Close";
// import { requirePropFactory } from "@mui/material";

import background from "../media/bg3.jpeg";
const Gallary = () => {
  let data = [
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
      id: 4,
      imgSrc: require("../media/image_4.jpg"),
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
      id: 15,
      imgSrc: require("../media/image_15.jpg"),
    },
    {
      id: 16,
      imgSrc: require("../media/image_16.jpg"),
    },
    {
      id: 17,
      imgSrc: require("../media/image_17.jpg"),
    },
    {
      id: 18,
      imgSrc: require("../media/image_18.jpg"),
    },
    {
      id: 19,
      imgSrc: require("../media/image_19.jpg"),
    },
    {
      id: 20,
      imgSrc: require("../media/image_20.jpg"),
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
      id: 23,
      imgSrc: require("../media/image_23.jpg"),
    },
    {
      id: 24,
      imgSrc: require("../media/image_24.jpg"),
    },
    {
      id: 25,
      imgSrc: require("../media/image_25.jpg"),
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
      id: 34,
      imgSrc: require("../media/image_34.jpg"),
    },
    {
      id: 35,
      imgSrc: require("../media/image_35.jpg"),
    },
  ];
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  const myStyle = {
    backgroundImage: `url(${background})`,
    height: "100vh",
    blur: true,
    // marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "fixed",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc}></img>
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div className="pics" key={index}>
              <img
                src={item.imgSrc}
                style={{ width: "100%" }}
                onClick={() => getImg(item.imgSrc)}
              ></img>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Gallary;

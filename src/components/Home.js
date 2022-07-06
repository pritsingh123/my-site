import React from "react";
import Footer from './footer'
import SimpleImageSlider from "react-simple-image-slider";
import 'bootstrap/dist/css/bootstrap.min.css';

const images = [
  { url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" },
  { url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" },
  { url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" },
  { url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" },
  { url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" },
  { url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" },
  { url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" },
  { url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" },
];

const Home = () => {
    return (
        <div>
          <SimpleImageSlider
            width={'80%'}
            height={'50%'}
            images={images}
            showBullets={true}
            showNavs={true}
            autoPlay={false}
            autoPlayDelay={1}
            style={{marginLeft:'auto',marginRight:'auto',objectFit: 'contain' }}
          />
          {/* <Footer /> */}
        </div>
    );
}

export default Home;
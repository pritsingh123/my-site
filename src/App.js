import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import Footer from './components/footer'
import {SliderData} from './components/SliderData';
import SimpleImageSlider from "react-simple-image-slider";


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
function App() {
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
      <Footer />
    </div>
  );
}

export default App;

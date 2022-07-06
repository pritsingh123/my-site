import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import Gallary from './components/gallary';
import Footer from './components/footer'
import Contact from './components/Contact';
import {Navbar,Container,Nav} from "react-bootstrap";
import {
  BrowserRouter ,
  Route,
  Link,
  Routes
} from "react-router-dom";
import FoundationIcon from '@mui/icons-material/Foundation';

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
    <BrowserRouter >
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand to={"#"}>{<FoundationIcon/>}HSS Construction</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link  as={Link} to={"/"}>Home</Nav.Link>
              <Nav.Link  as={Link} to={"/about"}>About</Nav.Link>
              <Nav.Link  as={Link} to={"/contact"}>Contact</Nav.Link>
              <Nav.Link  as={Link} to={"/gallary"}>Gallary</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallary" element={<Gallary />} />
        </Routes>
      </div>
    </div>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;

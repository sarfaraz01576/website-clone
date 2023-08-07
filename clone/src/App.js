import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gsap from "gsap";
import "slick-carousel";
import ScrollTrigger from "gsap/ScrollTrigger";
import './script';
import Home from './components/Home';
import Nav from "./components/Nav";
import About from "./components/About"
import Factions from './components/Factions';
import World from "./components/World";
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {

  return (
    <div className="App" style={{ height: "100%" }}>
      <div className="wrapper">
        <Nav />
        <div className="landing-ur-wrapper">
          <Home />
          <About />
          <Factions />
          <World />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

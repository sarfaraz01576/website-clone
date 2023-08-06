import './App.css';
import Home from './components/Home';
import Nav from "./components/Nav";
import About from "./components/About"
import Factions from './components/Factions';
import World from "./components/World";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gsap from "gsap";
import "slick-carousel";
import $ from "jquery";
import './script';

function App() {

  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Factions />
      <World />
    </div>
  );
}

export default App;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

gsap.registerPlugin(ScrollTrigger);

const World = () => {
  return (
    <section id="world" className="section-world d-flex flex-column align-items-center justify-content-center position-relative">
      <div className="section-bg position-absolute w-100"></div>
      <div className="section-glows position-absolute w-100 h-100"></div>
      <div className="landing-ur-kate w-100 h-100 position-absolute"></div>

      <h1 className="text-uppercase text-center position-relative mx-auto mt-5 mb-3">Start your game</h1>

      <ul className="list-unstyled d-flex flex-column flex-lg-row mb-5 pb-5 position-relative">
        <li className="list-inline-item mx-2">
          <a className="fs-1 mb-0 p-0 text-black js-download" target="_blank" title="Click to download and play Urban Rivals on Windows" href="https://s.acdn.ur-img.com/downloads/desktop/UrbanRivals_Setup_1.15.2.exe" data-appplatform="pc" download="UrbanRivals_Setup_1.15.2.exe">
            <img className="home-pic-button" style={{ maxWidth: "200px" }} src="images/home-logo-windows.png" alt="UR on Windows" />
          </a>
        </li>
        <li className="list-inline-item mx-2">
          <a className="fs-1 mb-0 p-0 text-black" target="_blank" href="http://store.steampowered.com/app/715310/Urban_Rivals/">
            <img className="home-pic-button" style={{ maxWidth: "200px" }} src="images/home-logo-steam.png" alt="Available on Steam" title="Available on Steam" />
          </a>
        </li>
        <li className="list-inline-item mx-2">
          <a className="fs-1 mb-0 p-0 text-black" target="_blank" href="play.html">
            <img className="home-pic-button" style={{ maxWidth: "200px" }} src="images/home-logo-webgl.png" alt="Play through browser" title="Play through browser" />
          </a>
        </li>
        <li className="list-inline-item mx-2">
          <a className="fs-1 mb-0 p-0 text-black" target="_blank" href="https://apps.apple.com/fr/app/urban-rivals/id329963928">
            <img className="home-pic-button" style={{ maxWidth: "200px" }} src="images/home-logo-applestore.png" alt="App Store" />
          </a>
        </li>
        <li className="list-inline-item mx-2">
          <a className="fs-1 mb-0 p-0 text-black" target="_blank" href="https://play.google.com/store/apps/details?id=air.com.boostr.Air">
            <img className="home-pic-button" style={{ maxWidth: "200px" }} src="images/home-logo-googleplay.png" alt="Google Play" />
          </a>
        </li>
      </ul>

      <h1 className="text-uppercase text-center position-relative mx-auto mt-5 mb-3">Join the community</h1>

      <ul className="list-unstyled d-flex mb-5 pb-5 position-relative">
        <li className="list-inline-item">
          <a href="https://discord.gg/CryCgjWjnb" className="fs-1 text-discord mb-0 p-0" target="_blank">
            <img className="home-pic-button" style={{ maxWidth: "200px" }} src="images/home-logo-discord.png" alt="Discord" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default World;

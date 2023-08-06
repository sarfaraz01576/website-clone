import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gsap from "gsap";
import "slick-carousel";
import $ from "jquery";

const Home = () => {
  useEffect(() => {
    $(document).ready(function () {
      // Parallax effect code...
      $(window).on("mousemove", function (o) {
        var i = $(window).width(),
          t = $(window).height(),
          s = 0.5 - o.pageX / i,
          e = 0.5 - o.pageY / t;
        $(".parallax").each(function (o, i) {
          var t = parseInt($(i).data("offset")),
            n =
              "translate3d(" +
              Math.round(s * t) +
              "px," +
              Math.round(e * t) +
              "px, 0px)";
          $(i).css({
            "-webkit-transform": n,
            transform: n,
            "moz-transform": n,
          });
        });
      });

      // GSAP timeline code...
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".section-feature-cards",
            start: "top bottom",
            end: "top 25%",
            pin: !1,
            scrub: !0,
          },
        })
        .from(".section-feature-cards .section-bg", { y: 200 }, "-=.3")
        .from(
          ".section-feature-cards .row .col-md-6:nth-child(1)",
          { y: 200 },
          "-=.3"
        )
        .from(
          ".section-feature-cards .row .col-md-6:nth-child(2)",
          { y: 200 },
          "-=.3"
        )
        .from(
          ".section-feature-cards .row .col-md-6:nth-child(3)",
          { y: 200 },
          "-=.3");

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".section-factions-slider",
            start: "top bottom",
            end: "top 25%",
            pin: !1,
            scrub: !0,
          },
        })
        .from(".section-factions-slider .landing-ur-slider-left", { x: -200 })
        .from(
          ".section-factions-slider .landing-ur-slider-right",
          { x: 200 },
          "-=.3"
        );

      // ... Add more GSAP timeline code as needed

    });

    // Make sure to clean up the event listener when the component unmounts
    return () => {
      $(window).off("mousemove");
    };
  }, []);

  return (
    <section className="section-hero d-flex align-items-center justify-content-center position-relative overflow-hidden">
      <div className="section-bg position-absolute parallax" data-offset="50"></div>

      <div className="section-graphics d-none d-sm-block position-absolute">
      <div id="character-4" className="position-absolute parallax" data-offset="35">
          <img
            className="img-fluid"
            src="images/landingv4-calque.png"
            alt="Character 4 graphic"
            width="800"
          />
        </div>
        <div id="character-3" className="position-absolute parallax" data-offset="25">
          <img
            className="img-fluid"
            src="images/landingv4-montana-mr-white.png"
            alt="Character 3 graphic"
            width="800"
          />
        </div>
        <div id="character-2" className="position-absolute parallax" data-offset="25">
          <img
            className="img-fluid"
            src="images/landingv4-pecheuse.png"
            alt="Character 2 graphic"
            width="900"
          />
        </div>
        <div id="character-1" className="position-absolute parallax" data-offset="15">
          <img
            className="img-fluid"
            src="images/landingv4-oculus-scarlet-3.png"
            alt="Character 1 graphic"
            width="750"
          />
        </div>
      </div>

      <div className="position-relative d-flex flex-column align-items-center justify-content-center">
        <picture className="landing-ur-logo-large-wrapper d-block position-relative mb-5">
          <img
            className="img-fluid d-block"
            src="images/landingv4-urban-rivals-logo.png"
            alt="Urban Rivals World logo"
            width="1000"
          />
        </picture>

        <a
          href="signup.html"
          className="ur-big-graphic-btn d-flex justify-content-center align-items-center mb-5"
          data-bs-toggle="modal"
          data-bs-target=".gameplay-trailer-modal"
          role="button"
        >
          <i className="fas fa-play"></i>

          <div className="ur-graphic-button-text-container">
            <svg viewBox="0 0 200 200">
              <path
                id="curve"
                transform="rotate(-34.8792, 102.602, 153.11)"
                d="m49.94642,114.81014c0,0 13.8114,92.27426 105.31191,74.26952"
              ></path>
            </svg>
          </div>
        </a>

        <ul className="list-unstyled d-flex flex-column flex-lg-row position-relative z-index-1">
          <li className="list-inline-item mx-2">
            <a
              className="fs-1 mb-0 p-0 text-black js-download"
              target="_blank"
              title="Click to download and play Urban Rivals on Windows"
              href="https://s.acdn.ur-img.com/downloads/desktop/UrbanRivals_Setup_1.15.2.exe"
              data-appplatform="pc"
              download="UrbanRivals_Setup_1.15.2.exe"
            >
              <img
                className="home-pic-button"
                style={{ maxWidth: "200px" }} // Use double curly braces for inline styles in React
                src="images/home-logo-windows.png"
                alt="UR on Windows"
              />
            </a>
          </li>
          <li className="list-inline-item mx-2">
            <a className="fs-1 mb-0 p-0 text-black" target="_blank" href="http://store.steampowered.com/app/715310/Urban_Rivals/">
              <img
                className="home-pic-button"
                style={{ maxWidth: "200px" }} // Use double curly braces for inline styles in React
                src="images/home-logo-steam.png"
                alt="Available on Steam"
                title="Available on Steam"
              />
            </a>
          </li>
          <li className="list-inline-item mx-2">
            <a className="fs-1 mb-0 p-0 text-black" target="_blank" href="play.html">
              <img
                className="home-pic-button"
                style={{ maxWidth: "200px" }} // Use double curly braces for inline styles in React
                src="images/home-logo-webgl.png"
                alt="Play through browser"
                title="Play through browser"
              />
            </a>
          </li>
          <li className="list-inline-item mx-2">
            <a className="fs-1 mb-0 p-0 text-black" target="_blank" href="https://apps.apple.com/fr/app/urban-rivals/id329963928">
              <img
                className="home-pic-button"
                style={{ maxWidth: "200px" }} // Use double curly braces for inline styles in React
                src="images/home-logo-applestore.png"
                alt="App Store"
              />
            </a>
          </li>
          <li className="list-inline-item mx-2">
            <a className="fs-1 mb-0 p-0 text-black" target="_blank" href="https://play.google.com/store/apps/details?id=air.com.boostr.Air">
              <img
                className="home-pic-button"
                style={{ maxWidth: "200px" }} // Use double curly braces for inline styles in React
                src="images/home-logo-googleplay.png"
                alt="Google Play"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Home;
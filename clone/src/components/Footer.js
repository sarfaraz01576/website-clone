import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="ur-footer position-relative">
      <svg className="ur-footer-border position-absolute d-block">
        <clippath id="ur-footer-bg" clippathunits="objectBoundingBox">
          <path
            transform="scale(0.000456 0.0037)"
            d="M2190.53 279.561H.885V1.776l477.941 4.479 16.735 6.179-2.662-7.222 501.306-2.846-2.075 11.631L1002.34.562l75.19 3.024 4.79 15.625 3.56-17.435 477.95 4.479 16.73 6.179-2.66-7.222 501.3-2.846-2.07 11.631L2087.34.562l103.19 3.024v275.975Z"
          ></path>
        </clippath>
      </svg>

      <div className="footer-row position-relative">
        <div className="footer-row-bg bg-footer-primary"></div>

        <a
          href="https://www.acute-games.com/"
          target="_blank"
          className="ur-footer-logo position-relative d-block mx-auto"
        >
          <img
            src="images/landingv4-acute-games-bordered.png"
            alt="Acute Games logo"
            width="286"
            height="171"
          />
        </a>

        <div className="mt-4 d-flex flex-column flex-sm-row align-items-center justify-content-center">
          <div className="w-100 mb-4 mb-sm-0">
            <ul className="list-unstyled d-flex mb-0 me-2 pe-0 pe-sm-5 position-relative">
              <li className="list-inline-item ms-auto">
                <a
                  href="https://discord.gg/CryCgjWjnb"
                  className="nav-link fs-1 mb-0 p-0"
                  target="_blank"
                >
                  <i className="fab fa-discord"></i>
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <a
                  href="https://twitter.com/acute_games"
                  className="nav-link fs-1 mb-0 p-0"
                  target="_blank"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <a
                  href="https://www.instagram.com/acutegames/"
                  className="nav-link fs-1 mb-0 p-0"
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <a
                  href="https://youtube.com/@acutegames"
                  className="nav-link fs-1 mb-0 p-0"
                  target="_blank"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li className="list-inline-item ms-2 me-auto me-sm-0">
                <a
                  href="https://www.facebook.com/acutegamesoffice"
                  className="nav-link fs-1 mb-0 p-0"
                  target="_blank"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="w-100">
            <ul className="list-unstyled d-flex me-2 mb-0 ps-0 ps-sm-5 position-relative">
              <li className="list-inline-item ms-auto ms-sm-0">
                <a
                  className="nav-link fs-1 mb-0 p-0 js-download"
                  target="_blank"
                  title="Click to download and play Urban Rivals on Windows"
                  href="https://s.acdn.ur-img.com/downloads/desktop/UrbanRivals_Setup_1.15.2.exe"
                  data-appplatform="pc"
                  download="UrbanRivals_Setup_1.15.2.exe"
                >
                  <i className="fab fa-windows"></i>
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <a
                  className="nav-link fs-1 mb-0 p-0"
                  target="_blank"
                  href="http://store.steampowered.com/app/715310/Urban_Rivals/"
                >
                  <i className="fab fa-steam"></i>
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <a
                  className="nav-link fs-1 mb-0 p-0"
                  target="_blank"
                  href="https://apps.apple.com/fr/app/urban-rivals/id329963928"
                >
                  <i className="fab fa-app-store"></i>
                </a>
              </li>
              <li className="list-inline-item ms-2 me-auto">
                <a
                  className="nav-link fs-1 mb-0 p-0"
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=air.com.boostr.Air"
                >
                  <i className="fab fa-google-play"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-row position-relative">
        <div className="footer-row-bg bg-footer-secondary"></div>

        <div className="container position-relative">
          <div className="mx-auto my-auto d-flex flex-column flex-lg-row align-items-center justify-content-center">
            <p className="text-center m-0">
              &copy;{" "}
              <a href="https://www.acute-games.com/" target="_blank">
                Acute Games, Inc
              </a>
              . All rights reserved
            </p>
            <p className="mx-1 my-0 d-none d-lg-block">|</p>
            <p className="m-0">
              <a
                href="signup.html"
                className="js-view-contact-form"
                data-bs-toggle="modal"
                data-bs-target="#contactModal"
                target="_blank"
              >
                Contact us
              </a>
            </p>
            <p className="mx-1 my-0 d-none d-lg-block">-</p>
            <p className="m-0">
              <a href="cgv.html" target="_blank">
                Terms and Conditions of use
              </a>
            </p>
            <p className="mx-1 my-0 d-none d-lg-block">-</p>
            <p className="m-0">
              <a href="privacy_policy.html" target="_blank">
                Privacy Policy
              </a>
            </p>
          </div>
          <p className="text-center m-0">PEGI 12</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

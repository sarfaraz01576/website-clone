import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const Nav = () => {
  return (
    // <div className="wrapper">
        <nav className="navbar navbar-expand-xl fixed-top navbar-dark p-0 align-items-stretch">
        <div className="landing-ur-logo-container d-none d-lg-block position-relative">
            <a href="www.urban-rivals.html" className="navbar-brand">
            <picture className="landing-ur-logo-wrapper ms-4 d-block">
                <img
                className="img-fluid"
                src="/images/landingv4-urban-rivals-logo.png"
                alt="Urban Rivals Logo"
                />
            </picture>
            </a>
        </div>

        <div id="navbar-menu" className="d-none d-xl-flex">
            <ul className="landing-ur-links navbar-nav ms-auto">
            <li className="nav-item">
                <a href="#top" className="nav-link fs-5 mb-0 mx-2 px-2">
                Home
                </a>
            </li>
            <li className="nav-item">
                <a href="#about" className="nav-link fs-5 mb-0 mx-2 px-2">
                Game
                </a>
            </li>
            <li className="nav-item">
                <a href="#factions" className="nav-link fs-5 mb-0 mx-2 px-2">
                Factions
                </a>
            </li>
            <li className="nav-item">
                <a href="#world" className="nav-link fs-5 mb-0 mx-2 px-2">
                Community
                </a>
            </li>
            </ul>

            <ul className="landing-ur-socials navbar-nav">
            <li className="nav-item ms-3 me-5">
                <a
                href="https://discord.gg/CryCgjWjnb"
                className="nav-link fs-5 font-ur text-discord mb-0 p-0"
                target="_blank"
                rel="noopener noreferrer"
                >
                <i className="fab fa-discord fs-3 text-discord"></i>
                <span className="ms-2 text-discord">Discord</span>
                </a>
            </li>
            </ul>

            <div className="landing-ur-play-now position-relative mt-1 ms-3 me-5">
            <a
                href="signup.html"
                className="btn"
                data-bs-toggle="modal"
                data-bs-target=".registration-login-form-container"
                role="button"
            >
                <span className="btn-inner">
                <span className="btn-text fs-4 mb-0">Play</span>
                <span className="btn-bg"></span>
                </span>
            </a>
            <div className="landing-ur-wires">
                <img
                src="/images/landingv4-blue-wire.png"
                alt="blue wire graphic"
                id="blue-wire-1"
                className="position-absolute"
                />
                <img
                src="/images/landingv4-blue-wire-2.png"
                alt="blue wire graphic 2"
                id="blue-wire-2"
                className="position-absolute"
                />
                <img
                src="/images/landingv4-blue-wire-2.png"
                alt="blue wire graphic 3"
                id="blue-wire-3"
                className="position-absolute"
                />
                <img
                src="/images/landingv4-red-wire.png"
                alt="red wire graphic"
                id="red-wire-1"
                className="position-absolute"
                />
                <img
                src="/images/landingv4-red-wire-2.png"
                alt="red wire graphic 2"
                id="red-wire-2"
                className="position-absolute"
                />
            </div>
            </div>
        </div>

        <div
            className="collapse position-fixed w-100 h-100 mt-0 text-uppercase flex-column align-items-center justify-content-center"
            id="navbar-menu-responsive"
        >
            <div className="d-flex flex-column align-items-center justify-content-center">
            <ul className="navbar-nav align-items-center justify-content-center">
                <li className="nav-item">
                <a href="/#top" className="nav-link fs-4 mb-0 mx-2 px-2">
                    Home
                </a>
                </li>
                <li className="nav-item">
                <a href="/#about" className="nav-link fs-4 mb-0 mx-2 px-2">
                    About
                </a>
                </li>
                <li className="nav-item">
                <a href="/#factions" className="nav-link fs-4 mb-0 mx-2 px-2">
                    Factions
                </a>
                </li>
                <li className="nav-item">
                <a href="/#world" className="nav-link fs-4 mb-0 mx-2 px-2">
                    World
                </a>
                </li>
                <li className="nav-item">
                <a
                    href="https://discord.gg/CryCgjWjnb"
                    className="nav-link fs-4 font-ur text-discord mb-0 mx-2 px-2"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-discord fs-3 text-discord"></i>
                    <span className="ms-2 text-discord">Discord</span>
                </a>
                </li>
            </ul>

            <div className="landing-ur-play-now position-relative mt-3">
                <a
                href="signup.html"
                className="btn"
                data-bs-toggle="modal"
                data-bs-target=".registration-login-form-container"
                role="button"
                >
                <span className="btn-inner">
                    <span className="btn-text fs-4 mb-0">Play</span>
                    <span className="btn-bg"></span>
                </span>
                </a>
            </div>
            </div>
        </div>

        <button
            className="navbar-toggler collapsed ms-auto position-relative"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-menu-responsive"
            aria-controls="navbar-menu-responsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <i className="fal fa-bars fa-xl m-0 py-4 px-3"></i>
        </button>
        </nav>
    // {/* </div> */}
  );
};

export default Nav;

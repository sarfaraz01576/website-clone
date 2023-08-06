import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  return (
    <section id="about" className="section-feature-cards position-relative">
        <div className="section-bg position-absolute"></div>

        <div className="feature-cards-container position-relative">
            <div className="row">
                <div className="col-md-6 col-xl-4 mb-5">
                    <article className="d-flex flex-column align-items-center justify-content-top h-100 position-relative">
                        <div className="graphic glow-orange position-relative">
                            <img className="img-fluid position-relative" src="images/landingv4-fight.png" alt="Fight graphic" />
                        </div>

                        <h1 className="text-white text-uppercase m-0">Fight</h1>

                        <p className="text-center mb-0">It's astonishingly simple: all you need to do is multiply the power of your cards with PILLZ! Building upon this solid foundation, you must create the most strategic deck to triumph over your opponents in no less than 6 diverse game modes, all while strictly adhering to a maximum duration of 4 minutes per match! Whether it's in AI modes, Free Mode, competitive modes with varying difficulty levels, or the solo mode with alternative gameplay mechanics, Urban Rivals immerses you in an explosive and profound gameplay experience, plunging you into this unique universe.</p>
                    </article>
                </div>

                <div className="col-md-6 col-xl-4 mb-5">
                    <article className="d-flex flex-column align-items-center justify-content-top h-100 position-relative">
                        <div className="graphic glow-secondary position-relative">
                            <img className="img-fluid position-relative" src="images/landingv4-evolve.png" alt="Evolve graphic" />
                        </div>

                        <h1 className="text-white text-uppercase m-0">Evolve</h1>

                        <p className="text-center mb-0">Urban Rivals offers you over 2500 characters, each with their own evolutions. You are not limited to enhancing the power and damage of a card alone; you can also evolve its artwork! By playing, you'll have the opportunity to accumulate XP, an essential resource for advancing your characters and making them even more powerful. Evolving your cards is an essential step, but you'll also need to evolve your player level by exploring the different game modes, allowing you to unlock special rewards at each milestone.</p>
                    </article>
                </div>

                <div className="col-md-6 col-xl-4 mb-5">
                    <article className="d-flex flex-column align-items-center justify-content-top h-100 position-relative">
                        <div className="graphic glow-orange position-relative">
                            <img className="img-fluid position-relative" src="images/landingv4-packs.png" alt="Collect graphic" />
                        </div>

                        <h1 className="text-white text-uppercase m-0">Collect</h1>

                        <p className="text-center mb-0">Urban Rivals is more than just a collectible card game; it stands out with its variety of gameplay and artistic direction. With its 34 clans and over 2500 artworks illustrated by artists with distinct styles, Urban Rivals visually sets itself apart from its competitors. Discovering new cards is an addictive visual experience that is one of the game's pillars, whether through pack acquisition or trading on the Market. <br/>Regardless of your preferences and playstyle, Urban Rivals has something to fulfill the expectations of all players, offering an unparalleled collectible card game experience.</p>
                    </article>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About;

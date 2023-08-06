import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gsap from "gsap";
import "slick-carousel";
import $ from "jquery";

$(document).ready(function () {
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
      $(i).css({ "-webkit-transform": n, transform: n, "moz-transform": n });
    });
  });

  // Corrected timeline calls with GSAP
  gsap.timeline({
    scrollTrigger: {
      trigger: ".section-feature-cards",
      start: "top bottom",
      end: "top 25%",
      pin: false,
      scrub: true,
    },
  })
    .from(".section-feature-cards .section-bg", { y: 200 }, "-=.3")
    .from(".section-feature-cards .row .col-md-6:nth-child(1)", { y: 200 }, "-=.3")
    .from(".section-feature-cards .row .col-md-6:nth-child(2)", { y: 200 }, "-=.3")
    .from(".section-feature-cards .row .col-md-6:nth-child(3)", { y: 200 }, "-=.3");

  gsap.timeline({
    scrollTrigger: {
      trigger: ".section-factions-slider",
      start: "top bottom",
      end: "top 25%",
      pin: false,
      scrub: true,
    },
  })
    .from(".section-factions-slider .landing-ur-slider-left", { x: -200 })
    .from(".section-factions-slider .landing-ur-slider-right", { x: 200 }, "-=.3");

  $(".faction-slides").slick({
    arrows: false,
    dots: false,
    fade: true,
    speed: 500,
    draggable: false,
  });

  $(".section-factions-slider").on("afterChange", function (o, i, t) {
    $(".section-factions-slider .slider-dots")
      .find(".dot")
      .each(function (o, i) {
        if (o === t) {
          $(".section-factions-slider .slider-dots")
            .find(".dot")
            .removeClass("active");
          $(i).addClass("active");
        }
      });
  });

  $(".section-factions-slider .slider-dots")
    .find(".dot")
    .each(function (o, i) {
      $(i).on("click", function () {
        $(".faction-slides").slick("slickGoTo", o);
        $(".section-factions-slider .slider-dots").find(".dot").removeClass("active");
        $(i).addClass("active");
      });
    });

  $(".section-factions-slider")
    .find(".slider-previous")
    .on("click", function () {
      $(".faction-slides").slick("slickPrev");
    });

  $(".section-factions-slider")
    .find(".slider-next")
    .on("click", function () {
      $(".faction-slides").slick("slickNext");
    });

  gsap.timeline({
    scrollTrigger: {
      trigger: ".section-world",
      start: "top bottom",
      end: "top 50%",
      pin: false,
      scrub: true,
    },
  })
    .from(".section-world .section-glows", { autoAlpha: 0 })
    .from(".section-world .landing-ur-kate", { x: -200 })
    .from(".section-world .landing-ur-play-btn", { y: 200 })
    .from(".section-world h1", { y: 200 })
    .from(".section-world ul", { y: 200 }, "-=.3");

  gsap.timeline({
    scrollTrigger: {
      trigger: ".section-world",
      start: "top bottom",
      end: "bottom top",
      pin: false,
      scrub: true,
    },
  }).fromTo(".section-world .section-bg", { y: -200 }, { y: 200 });
});

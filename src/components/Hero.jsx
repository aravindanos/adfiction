import { FiPlay, FiArrowDown, FiVolume2 } from "react-icons/fi";
import "../styles/hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      {/* 3D BACKGROUND */}
      <div className="hero-background">
        <div className="hero-glow glow-one"></div>
        <div className="hero-glow glow-two"></div>
      </div>

      <div className="hero-grid"></div>

      {/* 3D DECORATION */}
      <div className="hero-orbit orbit-one"></div>
      <div className="hero-orbit orbit-two"></div>
      <div className="hero-orbit orbit-three"></div>

      {/* CONTENT */}
      <div className="hero-content">
 

        <h1>
          STORIES
          <br />
          <span>BEYOND</span>
          <br />
          REALITY
        </h1>

        <p className="hero-description">
          Discover cinematic short films, emotional stories
          and original album songs created by ADFICTION And SRV MEDIA.
        </p>

      <div className="hero-buttons">

  <Link
    to="/watch/shortfilm-01"
    className="watch-button"
  >
    <FiPlay />
    <span>Watch Now</span>
  </Link>

  <Link
    to="/short-films"
    className="explore-button"
  >
    Explore
  </Link>
 <Link
    to="/about"
    className="explore-button"
  >
    ABOUT
  </Link>
</div>

      </div>

      {/* RIGHT VIDEO */}
      <div className="hero-video-wrapper">

        <div className="video-shadow"></div>

        <div className="video-frame">

          <div className="video-top">
            <span>ADFICTION</span>

            <div className="video-status">
              <span></span>
              ORIGINAL
            </div>
          </div>

          <video
            className="intro-video"
            src="/intro2.mp4"
            autoPlay
            muted
            loop
            playsInline
          />

          <div className="video-overlay"></div>

          <div className="video-bottom">

            <div>
              <small>CHANNEL INTRO</small>
              <strong>ADFICTION & SRVMEDIA</strong>
            </div>

            <div className="video-play">
              <FiVolume2 />
            </div>

          </div>

        </div>

      </div>
 

      {/* SCROLL */}
      <div className="hero-scroll">
        <div className="scroll-line"></div>
        <FiArrowDown />
        <span>SCROLL TO EXPLORE</span>
      </div>
 

    </section>
  );
}

export default Hero;
import {
  FiArrowUpRight,
  FiInstagram,
  FiYoutube,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";

import { Link } from "react-router-dom";

import "../styles/footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="adfiction-footer">

      {/* TOP CINEMATIC LINE */}
      <div className="footer-top-line">
        <span>ADFICTION ORIGINALS</span>
        <span>EST. 2026</span>
      </div>

      {/* MAIN FOOTER */}
      <div className="footer-main">

        {/* BIG BRAND */}
        <div className="footer-brand">

          <div className="footer-brand-label">
            STORIES / BEYOND / REALITY
          </div>

          <h2 className="footer-title">
            AD
            <span>FICTION</span>
          </h2>

          <p className="footer-description">
            Stories that stay after the screen fades.
            Cinema, music and imagination — created
            beyond reality.
          </p>

          <Link to="/short-films" className="footer-cta">
            <span>EXPLORE OUR STORIES</span>
            <FiArrowUpRight />
          </Link>

        </div>

        {/* NAVIGATION */}
        <div className="footer-column">

          <span className="footer-column-title">
            NAVIGATION
          </span>
 
          <Link to="/short-films">SHORT FILMS</Link>
          <Link to="/album-songs">ALBUM SONGS</Link> 
          <Link to="/about">ABOUT</Link> 
        </div>

        {/* SOCIAL */}
        <div className="footer-column">

          <span className="footer-column-title">
            CONNECT
          </span>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram />
            INSTAGRAM
          </a>

          <a
            href="https://www.youtube.com/@adfictionyt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiYoutube />
            YOUTUBE
          </a>

          <a href="mailto:framefictionyt@gmail.com">
            <FiMail />
            EMAIL
          </a>

        </div>

      </div>

      {/* GIANT TEXT */}
      <div className="footer-monument">

        <div className="footer-monument-text">
          ADFICTION
        </div>

        <div className="footer-monument-shadow">
          ADFICTION
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">

        <div>
          © {new Date().getFullYear()} ADFICTION.
          ALL RIGHTS RESERVED.
        </div>

        <div className="footer-bottom-center">
          Designed & Built by <a href="https://aravind-profile.vercel.app" target="_blank" rel="noopener noreferrer">Aravindan OS</a>
        </div>

        <button
          className="footer-top-button"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <span>BACK TO TOP</span>
          <FiArrowUp />
        </button>

      </div>

    </footer>
  );
}

export default Footer;
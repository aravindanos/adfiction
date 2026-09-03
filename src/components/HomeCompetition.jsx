import { Link } from "react-router-dom";
import { FiArrowUpRight, FiAward } from "react-icons/fi";
import "../styles/homecompetition.css";

function HomeCompetition() { 

  return (
   <section className="home-competition">
  <div className="home-competition-grid" />

  <div className="home-competition-top">
    <span className="home-competition-label">
      <FiAward />
      SRV MEDIA PRESENTS
    </span>

    <span className="home-competition-index">
      SHORT FILMS COMPETITION
    </span>
  </div>

  <div className="home-competition-content">
    <div className="home-competition-copy">
      <span className="home-competition-eyebrow">
        SHORT FILM COMPETITION
      </span>

      <h2>
        YOUR STORY.
        <br />
        <span>YOUR SCREEN.</span>
      </h2>

      <p>
        A cinematic space where short films,
        bold ideas and unique stories come together.
        Discover the official ADFICTION Short Film
        Competition entries.
      </p>

      <Link
        to="/shortfilmcompetition"
        className="home-competition-button"
      >
        <span>EXPLORE COMPETITION</span>
        <FiArrowUpRight />
      </Link>
    </div>

   <Link
  to="/shortfilmcompetition"
  className="home-competition-visual"
> 
  <iframe
    className="home-competition-video"
      src="https://www.youtube.com/embed/IINTnl9EPtY?autoplay=1&mute=1&loop=1&playlist=IINTnl9EPtY&controls=0&rel=0&modestbranding=1&playsinline=1"
    title="Short Film Competition"
    allow="autoplay; encrypted-media"
    allowFullScreen
  />
 
  <div className="home-competition-video-overlay" />
 
  {/* <div className="home-competition-number">
    <span>SHORT</span>
    <strong>FILM</strong>
  </div> */}

  <div className="home-competition-play">
    <FiArrowUpRight />
  </div>

  <div className="home-competition-bottom">
    <span>OFFICIAL ENTRIES</span>
    <strong>WATCH THE FILMS</strong>
  </div>
</Link>
  </div>

  <div className="home-competition-footer">
    <span>STORIES DESERVE TO BE SEEN.</span>
    <span>ADFICTION © 2026</span>
  </div>
</section>
  );
}

export default HomeCompetition;
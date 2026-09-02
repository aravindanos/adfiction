import { 
  FiArrowUpRight, 
  FiArrowLeft,
  FiPlay, 
  FiFilm, 
  FiMusic, 
  FiCamera, 
  FiLayers, 
} from "react-icons/fi";

import { Link } from "react-router-dom";

import "../styles/about.css";

function About() {
  return (
    <>  <Link to="/" className="about-back-home">
    <span className="back-icon">
      <FiArrowLeft />
    </span>

    <span className="back-text">
      BACK TO HOME
    </span>
  </Link>
    <main className="about-page">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="about-hero">

        <div className="about-grid"></div>

        <div className="about-orbit orbit-one"></div>
        <div className="about-orbit orbit-two"></div>

        <div className="about-hero-content">

          <span className="about-eyebrow">
            ADFICTION / ORIGINALS
          </span>

          <h1 className="about-hero-title">
            ABOUT
            <span>ADFICTION</span>
          </h1>

          <p className="about-hero-subtitle">
            STORIES / BEYOND / REALITY
          </p>

        </div>

        <div className="about-scroll">
          <span>SCROLL TO DISCOVER</span>
          <div></div>
        </div>

        <div className="about-hero-number">
          01
        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="about-intro">

        <div className="about-section-label">
          <span>01</span>
          WHO WE ARE
        </div>

        <div className="about-intro-content">

          <h2>
            WE DON'T JUST
            <br />
            <span>CREATE STORIES.</span>
          </h2>

          <p>
            ADFICTION is an independent creative platform built
            around cinema, music, visual storytelling and ideas.
          </p>

          <p>
            From emotional short films to original music,
            every project begins with a simple idea and grows
            into something people can see, hear and feel.
          </p>

          <div className="about-statement">
            <span>OUR BELIEF</span>

            <strong>
              A GREAT STORY
              <br />
              DOESN'T NEED
              <br />
              LIMITS.
            </strong>
          </div>

        </div>

      </section>


      {/* =====================================================
          3D CREATIVE CARDS
      ===================================================== */}

      <section className="about-creative">

        <div className="about-section-label">
          <span>02</span>
          WHAT WE CREATE
        </div>

        <div className="creative-intro">

          <h2>
            FOUR WORLDS.
            <br />
            <span>ONE VISION.</span>
          </h2>

        </div>

        <div className="creative-grid">

          <div className="creative-card">

            <div className="creative-card-number">
              01
            </div>

            <FiFilm className="creative-icon" />

            <h3>FILM</h3>

            <p>
              Short films and cinematic stories that
              explore emotions, people and reality.
            </p>

            <span className="creative-card-line"></span>

          </div>


          <div className="creative-card">

            <div className="creative-card-number">
              02
            </div>

            <FiMusic className="creative-icon" />

            <h3>MUSIC</h3>

            <p>
              Original songs created to give emotions
              a voice beyond the screen.
            </p>

            <span className="creative-card-line"></span>

          </div>


          <div className="creative-card">

            <div className="creative-card-number">
              03
            </div>

            <FiCamera className="creative-icon" />

            <h3>VISUALS</h3>

            <p>
              Cinematography, photography and visual
              experiences designed to tell stories.
            </p>

            <span className="creative-card-line"></span>

          </div>


          <div className="creative-card">

            <div className="creative-card-number">
              04
            </div>

            <FiLayers className="creative-icon" />

            <h3>IDEAS</h3>

            <p>
              Experimental concepts that push storytelling
              beyond conventional boundaries.
            </p>

            <span className="creative-card-line"></span>

          </div>

        </div>

      </section>


      {/* =====================================================
          ARAVINDAN OS
      ===================================================== */}

      <section className="about-head">

        <div className="head-background-text">
          ARAVINDAN
        </div>

        <div className="about-section-label">
          <span>03</span>
          THE PERSON BEHIND ADFICTION
        </div>

        <div className="head-layout">

          <div className="head-visual">

            <div className="head-frame">

              <div className="head-frame-inner">
  

              </div>

            </div>

            <div className="head-vertical-text">
              Aravindan OS / ADFICTION
            </div>

          </div>


          <div className="head-content">

            <span className="head-label">
              HEAD / CREATIVE LEAD
            </span>

            <h2>
              ARAVINDAN
              <span>OS</span>
            </h2>

            <div className="head-line"></div>

            <p className="head-quote">
              “Every story starts as an idea.
              Our job is to turn that idea into
              something people can feel.”
            </p>

            <p>
              Aravindan OS leads the creative vision of
              ADFICTION, shaping its stories, visual identity
              and cinematic direction.
            </p>

            <p>
              With a passion for storytelling and visual
              experiences, ADFICTION is built as a space
              where creativity can exist without boundaries.
            </p>

            <div className="head-signature">
              <span>CREATIVE VISION</span>
              <strong>ARAVINDAN OS</strong>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}

      <section className="about-philosophy">

        <div className="philosophy-circle">
          <div className="philosophy-circle-inner">
            ADFICTION
          </div>
        </div>

        <div className="philosophy-content">

          <span>OUR PHILOSOPHY</span>

          <h2>
            CREATE.
            <br />
            EXPERIMENT.
            <br />
            <span>INSPIRE.</span>
          </h2>

          <p>
            We believe stories can come from anywhere.
            A street. A memory. A conversation.
            A single thought.
          </p>

          <p>
            We turn those moments into films, music and
            visual experiences.
          </p>

        </div>

      </section>


      {/* =====================================================
          SELECTED WORKS
      ===================================================== */}

      <section className="about-works">

        <div className="about-section-label">
          <span>04</span>
          SELECTED WORKS
        </div>

        <div className="works-heading">

          <h2>
            STORIES
            <span>WE'VE TOLD.</span>
          </h2>

          <Link to="/short-films">
            VIEW ALL
            <FiArrowUpRight />
          </Link>

        </div>

        <div className="works-list">

          <Link to="/watch/shortfilm-01" className="work-item">
            <span>01</span>
            <h3>ETHIROLI</h3>
            <p>SHORT FILM</p>
            <FiArrowUpRight />
          </Link>

          <Link to="/watch/shortfilm-02" className="work-item">
            <span>02</span>
            <h3>CALL FROM TOMORROW</h3>
            <p>SHORT FILM</p>
            <FiArrowUpRight />
          </Link>

          <Link to="/watch/shortfilm-03" className="work-item">
            <span>03</span>
            <h3>LAST SEEN</h3>
            <p>SHORT FILM</p>
            <FiArrowUpRight />
          </Link>

          <Link to="/watch/album-01" className="work-item">
            <span>04</span>
            <h3>NINAIVIN ORAM</h3>
            <p>ORIGINAL MUSIC</p>
            <FiArrowUpRight />
          </Link>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="about-final">

        <div className="final-grid"></div>

        <span>
          ADFICTION / 2026
        </span>

        <h2>
          THE NEXT STORY
          <br />
          <span>STARTS HERE.</span>
        </h2>

        <p>
          Stories are waiting to be created.
        </p>

        <Link to="/short-films" className="final-button">
          <span>EXPLORE ADFICTION</span>
          <FiArrowUpRight />
        </Link>

        <div className="final-3d-text">
          ADFICTION
        </div>

      </section>

    </main>
    </>
  );
}

export default About;
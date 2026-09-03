import { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiPlay,
  FiArrowUpRight,
  FiFilm,
  FiAward,
} from "react-icons/fi";

import videos from "../data/videos";
import "../styles/shortfilmcompetition.css";

function ShortFilmCompetition() {

  const films = useMemo(
    () =>
      videos.filter(
        (video) => video.competition === true
      ),
    []
  );

  const featuredFilm =
    films.find((film) => film.featured) ||
    films[0];

  if (!featuredFilm) {
    return (
      <div className="competition-empty">

        <FiFilm />

        <h1>
          NO ENTRIES YET
        </h1>

        <p>
          Short film competition entries
          will appear here.
        </p>

        <Link to="/">
          <FiArrowLeft />
          BACK HOME
        </Link>

      </div>
    );
  }

  return (
    <div className="competition-page">

      {/* =================================
          BACKGROUND
      ================================= */}

      <div className="competition-grid" />

      <div className="competition-circle circle-one" />
      <div className="competition-circle circle-two" />


      {/* =================================
          HEADER
      ================================= */}

      <header className="competition-header">

        <Link
          to="/"
          className="competition-back"
        >
          <FiArrowLeft />
          <span>BACK HOME</span>
        </Link>


        <div className="competition-logo">
          AD<span>FICTION</span>
        </div>


        <div className="competition-number">
          {String(films.length).padStart(2, "0")}
          <span> ENTRIES</span>
        </div>

      </header>


      {/* =================================
          HERO
      ================================= */}

      <section className="competition-hero">

        <div className="competition-hero-left">

          <div className="competition-eyebrow">
            <FiAward />
            SRV MEDIA PRESENTS
          </div>


          <h1>
            SHORT
            <span>FILM</span>
            <strong>
              COMPETITION
            </strong>
          </h1>


          <p className="competition-hero-description">
            Stories created by filmmakers,
            brought together on one cinematic
            stage.
          </p>


          <div className="competition-hero-info">

            <div>
              <span>ENTRIES</span>
              <strong>
                {String(films.length).padStart(
                  2,
                  "0"
                )}
              </strong>
            </div>

            <div>
              <span>YEAR</span>
              <strong>
                2021
              </strong>
            </div>

            <div>
              <span>FORMAT</span>
              <strong>
                SHORT FILM
              </strong>
            </div>

          </div>

        </div>


        {/* FEATURED FILM */}

        <Link
          to={`/watch/${featuredFilm.id}`}
          className="competition-featured"
        >

          <img
            src={`https://img.youtube.com/vi/${featuredFilm.youtubeId}/maxresdefault.jpg`}
            alt={featuredFilm.title}
            onError={(event) => {
              event.currentTarget.src =
                `https://img.youtube.com/vi/${featuredFilm.youtubeId}/hqdefault.jpg`;
            }}
          />

          <div className="competition-featured-overlay" />


          <div className="competition-featured-top">

            <span>
              FEATURED ENTRY
            </span>

            <span>
              01
            </span>

          </div>


          <div className="competition-featured-play">

            <FiPlay />

          </div>


          <div className="competition-featured-bottom">

            <span>
              {featuredFilm.genre}
            </span>

            <h2>
              {featuredFilm.title}
            </h2>

            <div>
              WATCH FILM
              <FiArrowUpRight />
            </div>

          </div>

        </Link>

      </section>


      {/* =================================
          ENTRIES
      ================================= */}

      <section className="competition-entries">

        <div className="competition-section-heading">

          <div>

            <span>
              OFFICIAL ENTRIES
            </span>

            <h2>
              THE
              <strong>
                FILMS.
              </strong>
            </h2>

          </div>


          <p>
            Explore every short film
            submitted to the ADFICTION
            Short Film Competition.
          </p>

        </div>


        <div className="competition-list">

          {films.map(
            (film, index) => (

              <Link
                to={`/watch/${film.id}`}
                className="competition-film"
                key={film.id}
              >

                {/* NUMBER */}

                <div className="competition-film-number">
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </div>


                {/* IMAGE */}

                <div className="competition-film-image">

                  <img
                    src={`https://img.youtube.com/vi/${film.youtubeId}/hqdefault.jpg`}
                    alt={film.title}
                    loading="lazy"
                  />

                  <div className="competition-film-overlay" />

                  <div className="competition-film-play">
                    <FiPlay />
                  </div>

                </div>


                {/* DETAILS */}

                <div className="competition-film-details">

                  <div className="competition-film-meta">

                    <span>
                      ENTRY {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <span>
                      {film.year}
                    </span>

                    <span>
                      {film.genre}
                    </span>

                  </div>


                  <h3>
                    {film.title}
                  </h3>


                  <p>
                    {film.description}
                  </p>


                  <div className="competition-film-watch">

                    <span>
                      WATCH ENTRY
                    </span>

                    <FiArrowUpRight />

                  </div>

                </div>

              </Link>

            )
          )}

        </div>

      </section>


      {/* =================================
          FINAL CTA
      ================================= */}

      <section className="competition-final">

        <div className="competition-final-ring" />

        <span>
          EVERY STORY DESERVES A SCREEN
        </span>

        <h2>
          WATCH.
          <strong>
            FEEL.
          </strong>
          <br />
          REMEMBER.
        </h2>

        <Link to="/short-films">
          EXPLORE ALL SHORT FILMS
          <FiArrowUpRight />
        </Link>

      </section>

    </div>
  );
}

export default ShortFilmCompetition;
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiPlay,
  FiArrowUpRight,
  FiFilm,
} from "react-icons/fi";

import videos from "../data/videos";
import "../styles/trailers.css";

function Trailers() {
  const trailers = useMemo(
    () =>
      videos.filter(
        (video) => video.category === "Trailers"
      ),
    []
  );

  const [activeTrailer, setActiveTrailer] = useState(
    trailers[0] || null
  );

  if (trailers.length === 0) {
    return (
      <div className="trailers-empty">
        <FiFilm />

        <h1>NO TRAILERS YET</h1>

        <p>
          New cinematic experiences are coming soon.
        </p>

        <Link to="/">
          <FiArrowLeft />
          BACK HOME
        </Link>
      </div>
    );
  }

  const featured =
    activeTrailer || trailers[0];

  const thumbnail =
    `https://img.youtube.com/vi/${featured.youtubeId}/maxresdefault.jpg`;

  return (
    <div className="trailers-page">

      {/* BACKGROUND */}
      <div className="trailers-noise" />
      <div className="trailers-lines" />

      {/* NAVIGATION */}
      <header className="trailers-nav">

        <Link
          to="/"
          className="trailers-back"
        >
          <FiArrowLeft />
          <span>BACK HOME</span>
        </Link>

        <div className="trailers-brand">
          AD<span>FICTION</span>
        </div>

        <div className="trailers-count">
          {String(trailers.length).padStart(
            2,
            "0"
          )}
          <span> TRAILERS AND MAKING</span>
        </div>

      </header>


      {/* HERO */}
      <section className="trailers-hero">

        <div className="trailers-hero-bg">
          <img
            src={thumbnail}
            alt={featured.title}
            onError={(event) => {
              event.currentTarget.src =
                `https://img.youtube.com/vi/${featured.youtubeId}/hqdefault.jpg`;
            }}
          />
        </div>

        <div className="trailers-hero-gradient" />

        <div className="trailers-hero-content">

          <div className="trailers-kicker">
            <span />
            FEATURED TRAILER
          </div>

          <h1>
            {featured.title}
          </h1>

          <p>
            {featured.description}
          </p>

          <div className="trailers-meta">

            <span>
              {featured.year}
            </span>

            <i />

            <span>
              {featured.genre}
            </span>

            <i />

            <span>
              OFFICIAL TRAILER
            </span>

          </div>

          <a
            href={`https://www.youtube.com/watch?v=${featured.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="trailers-watch"
          >
            <span className="trailers-play-icon">
              <FiPlay />
            </span>

            <span>
              WATCH TRAILER
            </span>

            <FiArrowUpRight />

          </a>

        </div>


        {/* BIG NUMBER */}
        <div className="trailers-hero-number">
          01
        </div>

        {/* SCROLL */}
        <div className="trailers-scroll">
          <span>SCROLL TO EXPLORE</span>
          <div />
        </div>

      </section>


      {/* TRAILER COLLECTION */}
      <section className="trailers-collection">

        <div className="trailers-heading">

          <div>
            <span className="trailers-label">
              CINEMATIC PREVIEWS
            </span>

            <h2>
              WATCH WHAT'S
              <strong> NEXT.</strong>
            </h2>
          </div>

          <p>
            Explore official trailers,
            upcoming stories and cinematic
            experiences from ADFICTION.
          </p>

        </div>


        {/* TRAILER GRID */}
        <div className="trailers-grid">

          {trailers.map(
            (video, index) => {
              const videoThumbnail =
                `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;

              const isActive =
                featured.id === video.id;

              return (
                <article
                  className={
                    isActive
                      ? "trailer-card active"
                      : "trailer-card"
                  }
                  key={video.id}
                  onClick={() =>
                    setActiveTrailer(video)
                  }
                >

                  <div className="trailer-card-image">

                    <img
                      src={videoThumbnail}
                      alt={video.title}
                      onError={(event) => {
                        event.currentTarget.src =
                          `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
                      }}
                    />

                    <div className="trailer-card-overlay" />

                    <div className="trailer-card-number">
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </div>

                    <div className="trailer-card-play">
                      <FiPlay />
                    </div>

                  </div>


                  <div className="trailer-card-content">

                    <div className="trailer-card-meta">
                      <span>
                        {video.year}
                      </span>

                      <span>
                        {video.genre}
                      </span>
                    </div>

                    <h3>
                      {video.title}
                    </h3>

                    <div className="trailer-card-bottom">

                      <span>
                        OFFICIAL TRAILER
                      </span>

                      <FiArrowUpRight />

                    </div>

                  </div>

                </article>
              );
            }
          )}

        </div>

      </section>


      {/* BOTTOM CTA */}
      <section className="trailers-ending">

        <span>
          MORE STORIES AWAIT
        </span>

        <h2>
          THE STORY
          <strong> CONTINUES.</strong>
        </h2>

        <Link
          to="/movies"
          className="trailers-ending-button"
        >
          EXPLORE MOVIES
          <FiArrowUpRight />
        </Link>

      </section>

    </div>
  );
}

export default Trailers;
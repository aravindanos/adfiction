import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiPlay,
  FiHeart,
  FiCheck,
  FiArrowUpRight,
} from "react-icons/fi";

import videos from "../data/videos";
import "../styles/movies.css";

function Movies() {
  const movies = videos.filter(
    (video) => video.category === "Movies"
  );

  const [favorites, setFavorites] = useState(() => {
    try {
      return (
        JSON.parse(
          localStorage.getItem("adfiction-favorites")
        ) || []
      );
    } catch {
      return [];
    }
  });

  const toggleFavorite = (event, id) => {
    event.preventDefault();
    event.stopPropagation();

    let updated;

    if (favorites.includes(id)) {
      updated = favorites.filter(
        (favoriteId) => favoriteId !== id
      );
    } else {
      updated = [...favorites, id];
    }

    setFavorites(updated);

    localStorage.setItem(
      "adfiction-favorites",
      JSON.stringify(updated)
    );
  };

  if (movies.length === 0) {
    return (
      <div className="movies-empty">
        <h1>NO MOVIES YET</h1>

        <p>
          New stories are coming soon.
        </p>

        <Link to="/">
          <FiArrowLeft />
          BACK HOME
        </Link>
      </div>
    );
  }

  return (
    <div className="movies-page">

      {/* BACKGROUND */}
      <div className="movies-background">
        <div className="movies-bg-line line-one" />
        <div className="movies-bg-line line-two" />
        <div className="movies-bg-line line-three" />
      </div>


      {/* HEADER */}
      <header className="movies-header">

        <Link
          to="/"
          className="movies-back"
        >
          <FiArrowLeft />
          <span>BACK</span>
        </Link>


        <div className="movies-brand">
          AD<span>FICTION</span>
        </div>


        <div className="movies-count">
          {String(movies.length).padStart(
            2,
            "0"
          )}
          <span> FILMS</span>
        </div>

      </header>


      {/* HERO TITLE */}
      <section className="movies-intro">

        <span className="movies-label">
          SRV RAJESHWARI FILMS PRESENTS
        </span>

        <h1>
          THE
          <span>MOVIES</span>
        </h1>

        <div className="movies-intro-bottom">

          <p>
            A collection of stories created
            beyond imagination. Explore every
            world, every emotion and every
            cinematic experience.
          </p>

          <span>
            SCROLL TO EXPLORE
          </span>

        </div>

      </section>


      {/* MOVIES LIST */}
      <main className="movies-list">

        {movies.map((movie, index) => {

          const thumbnail =
            `https://img.youtube.com/vi/${movie.youtubeId}/maxresdefault.jpg`;

          const isFavorite =
            favorites.includes(movie.id);

          return (
            <Link
              to={`/watch/${movie.id}`}
              className="movie-row"
              key={movie.id}
            >

              {/* NUMBER */}
              <div className="movie-row-number">
                {String(index + 1).padStart(
                  2,
                  "0"
                )}
              </div>


              {/* IMAGE */}
              <div className="movie-row-image">

                <img
                  src={thumbnail}
                  alt={movie.title}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.src =
                      `https://img.youtube.com/vi/${movie.youtubeId}/hqdefault.jpg`;
                  }}
                />

                <div className="movie-row-overlay" />

                <div className="movie-row-play">
                  <FiPlay />
                </div>

              </div>


              {/* CONTENT */}
              <div className="movie-row-content">

                <div className="movie-row-top">

                  <div className="movie-row-meta">
                    <span>
                      {movie.year}
                    </span>

                    <span className="movie-dot">
                      •
                    </span>

                    <span>
                      {movie.genre}
                    </span>
                  </div>


                  <button
                    className={
                      isFavorite
                        ? "movie-favorite active"
                        : "movie-favorite"
                    }
                    onClick={(event) =>
                      toggleFavorite(
                        event,
                        movie.id
                      )
                    }
                    aria-label="Favorite"
                  >
                    {isFavorite
                      ? <FiCheck />
                      : <FiHeart />
                    }
                  </button>

                </div>


                <h2>
                  {movie.title}
                </h2>


                <p>
                  {movie.description}
                </p>


                <div className="movie-row-footer">

                  <span>
                    WATCH MOVIE
                  </span>

                  <div className="movie-arrow">
                    <FiArrowUpRight />
                  </div>

                </div>

              </div>

            </Link>
          );
        })}

      </main>


      {/* FOOTER CTA */}
      <section className="movies-end">

        <span>
          MORE STORIES ARE WAITING
        </span>

        <h2>
          CINEMA
          <strong> NEVER ENDS.</strong>
        </h2>

        <Link to="/channels">
          EXPLORE CHANNELS
          <FiArrowUpRight />
        </Link>

      </section>

    </div>
  );
}

export default Movies;
import { useEffect, useState } from "react";
import {
  FiHeart,
  FiPlay,
  FiTrash2,
  FiArrowLeft,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import videos from "../data/videos";
import "../styles/favorites.css";

function Favorites() {
  const [favoriteIds, setFavoriteIds] = useState([]);

  useEffect(() => {
    try {
      const saved =
        JSON.parse(
          localStorage.getItem("adfiction-favorites")
        ) || [];

      setFavoriteIds(saved);
    } catch {
      setFavoriteIds([]);
    }
  }, []);

  const favoriteVideos = videos.filter((video) =>
    favoriteIds.includes(video.id)
  );

  const removeFavorite = (videoId) => {
    const updated = favoriteIds.filter(
      (id) => id !== videoId
    );

    localStorage.setItem(
      "adfiction-favorites",
      JSON.stringify(updated)
    );

    setFavoriteIds(updated);
  };

  return (
    <main className="favorites-page">
 <Link to="/" className="about-back-home">
    <span className="back-icon">
      <FiArrowLeft />
    </span>

    <span className="back-text">
      BACK TO HOME
    </span>
  </Link>
      <section className="favorites-hero">

        <span className="favorites-eyebrow">
          ADFICTION / YOUR COLLECTION
        </span>

        <h1>
          MY
          <span>FAVORITES</span>
        </h1>

        <p>
          Your saved stories, films and music.
        </p>

      </section>

      <section className="favorites-content">

        <div className="favorites-header">
          <div>
            <span className="favorites-label">
              SAVED STORIES
            </span>

            <h2>
              {favoriteVideos.length}{" "}
              {favoriteVideos.length === 1
                ? "STORY"
                : "STORIES"}
            </h2>
          </div>
        </div>

        {favoriteVideos.length === 0 ? (

          <div className="favorites-empty">

            <FiHeart />

            <h3>
              NO FAVORITES YET
            </h3>

            <p>
              Click the heart button on any
              ADFICTION video to save it here.
            </p>

            <Link
              to="/short-films"
              className="favorites-explore"
            >
              EXPLORE STORIES
              <FiPlay />
            </Link>

          </div>

        ) : (

          <div className="favorites-grid">

            {favoriteVideos.map((video) => (

              <article
                className="favorite-card"
                key={video.id}
              >

                <Link
                  to={`/watch/${video.id}`}
                  className="favorite-thumbnail"
                >

                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title}
                  />

                  <div className="favorite-play">
                    <FiPlay />
                  </div>

                </Link>

                <div className="favorite-info">

                  <div>

                    <span className="favorite-category">
                      {video.category}
                    </span>

                    <h3>
                      {video.title}
                    </h3>

                    <p>
                      {video.year}
                    </p>

                  </div>

                  <button
                    className="favorite-remove"
                    onClick={() =>
                      removeFavorite(video.id)
                    }
                    aria-label="Remove from favorites"
                  >
                    <FiTrash2 />
                  </button>

                </div>

              </article>

            ))}

          </div>

        )}

      </section>

    </main>
  );
}

export default Favorites;
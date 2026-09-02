import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import Navbar from "../components/Navbar";
import VideoCard from "../components/VideoCard";

import videos from "../data/videos";

import "../styles/category.css";

function ShortFilms() {

  const [filter, setFilter] = useState("All");

  const shortFilms = videos.filter(
    (video) => video.category === "Short Films"
  );

  const genres = [
    "All",
    ...new Set(shortFilms.map((video) => video.genre)),
  ];

  const filteredVideos =
    filter === "All"
      ? shortFilms
      : shortFilms.filter(
          (video) => video.genre === filter
        );

  return (
    <div className="category-page">

      <Navbar />

      <header className="category-hero">

        <div className="category-hero-number">
          01
        </div>

        <div className="category-hero-content">

          <p className="category-eyebrow">
            ADFICTION ORIGINALS
          </p>

          <h1>
            SHORT
            <span> FILMS</span>
          </h1>

          <p>
            Stories created to entertain,
            surprise and make you feel.
          </p>

        </div>

      </header>

      <main className="category-content">

        <div className="category-toolbar">

          <div className="category-count">
            {filteredVideos.length} FILMS
          </div>

          <div className="category-filters">

            {genres.map((genre) => (

              <button
                key={genre}
                className={
                  filter === genre
                    ? "filter-button active"
                    : "filter-button"
                }
                onClick={() => setFilter(genre)}
              >
                {genre}
              </button>

            ))}

          </div>

        </div>

        <div className="video-grid">

          {filteredVideos.map((video) => (

            <VideoCard
              key={video.id}
              video={video}
            />

          ))}

        </div>

        {filteredVideos.length === 0 && (

          <div className="empty-category">
            No films found.
          </div>

        )}

      </main>

      <footer className="category-footer">

        <Link to="/">
          <FiArrowLeft />
          Back to ADFICTION
        </Link>

      </footer>

    </div>
  );
}

export default ShortFilms;
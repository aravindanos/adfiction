import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import Navbar from "../components/Navbar";
import VideoCard from "../components/VideoCard";

import videos from "../data/videos";

import "../styles/category.css";

function AlbumSongs() {

  const [filter, setFilter] = useState("All");

  const albumSongs = videos.filter(
    (video) => video.category === "Album Songs"
  );

  const genres = [
    "All",
    ...new Set(albumSongs.map((video) => video.genre)),
  ];

  const filteredVideos =
    filter === "All"
      ? albumSongs
      : albumSongs.filter(
          (video) => video.genre === filter
        );

  return (
    <div className="category-page">

      <Navbar />

      <header className="category-hero music-hero">

        <div className="category-hero-number">
          02
        </div>

        <div className="category-hero-content">

          <p className="category-eyebrow">
            ADFICTION MUSIC
          </p>

          <h1>
            ALBUM
            <span> SONGS</span>
          </h1>

          <p>
            Original music, emotions and
            stories told through sound.
          </p>

        </div>

      </header>

      <main className="category-content">

        <div className="category-toolbar">

          <div className="category-count">
            {filteredVideos.length} SONGS
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
            No songs found.
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

export default AlbumSongs;
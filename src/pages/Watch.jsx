import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheck,
  FiCopy,
  FiHeart,
  FiPlay,
  FiShare2,
  FiYoutube,
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import VideoCard from "../components/VideoCard";

import videos from "../data/videos";
import "../styles/watch.css";

function Watch() {
  const { videoId } = useParams();
  const navigate = useNavigate();

  const video = videos.find((item) => item.id === videoId);

  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem("adfiction-favorites")
      ) || [];
    } catch {
      return [];
    }
  });

  const [copied, setCopied] = useState(false);

  /*
    Find next / previous videos from the
    same category.
  */
  const categoryVideos = useMemo(() => {
    if (!video) return [];

    return videos.filter(
      (item) => item.category === video.category
    );
  }, [video]);

  const currentIndex = categoryVideos.findIndex(
    (item) => item.id === videoId
  );

  const previousVideo =
    currentIndex > 0
      ? categoryVideos[currentIndex - 1]
      : null;

  const nextVideo =
    currentIndex >= 0 &&
    currentIndex < categoryVideos.length - 1
      ? categoryVideos[currentIndex + 1]
      : null;

  /*
    Related videos
  */
  const relatedVideos = useMemo(() => {
    if (!video) return [];

    const sameCategory = videos.filter(
      (item) =>
        item.category === video.category &&
        item.id !== video.id
    );

    const otherVideos = videos.filter(
      (item) =>
        item.category !== video.category &&
        item.id !== video.id
    );

    return [...sameCategory, ...otherVideos].slice(0, 6);
  }, [video]);

  const isFavorite = favorites.includes(videoId);

  /*
    Save favorites to localStorage
  */
  useEffect(() => {
    localStorage.setItem(
      "adfiction-favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  if (!video) {
    return (
      <div className="watch-not-found">
        <div>
          <p>ADFICTION</p>
          <h1>VIDEO NOT FOUND</h1>

          <Link to="/">
            <FiArrowLeft />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const toggleFavorite = () => {
    setFavorites((current) => {
      if (current.includes(videoId)) {
        return current.filter((id) => id !== videoId);
      }

      return [...current, videoId];
    });
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(
        window.location.href
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  };

  const shareVideo = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: video.title,
          text: `Watch ${video.title} on ADFICTION`,
          url: window.location.href,
        });
      } catch {
        // User cancelled sharing.
      }
    } else {
      copyLink();
    }
  };

  return (
    <div className="watch-page">
      <Navbar />

      {/* Cinematic background */}
      <div className="watch-background">
        <div className="watch-orb watch-orb-one"></div>
        <div className="watch-orb watch-orb-two"></div>
        <div className="watch-grid"></div>
      </div>

      <main className="watch-content">
        {/* Back */}
        <div className="watch-topbar">
          <button
            className="watch-back"
            onClick={() => navigate(-1)}
          >
            <FiArrowLeft />
            <span>Back</span>
          </button>

          <div className="watch-brand">
            ADFICTION
          </div>
        </div>

        {/* PLAYER */}
        <section className="watch-player-section">
          <div className="watch-player-frame">
            <iframe
              src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1`}
              title={video.title}
              allow="
                accelerometer;
                autoplay;
                clipboard-write;
                encrypted-media;
                gyroscope;
                picture-in-picture;
                web-share
              "
              allowFullScreen
            />

            <div className="watch-player-border"></div>
            <div className="watch-player-glow"></div>
          </div>
        </section>

        {/* VIDEO INFO */}
        <section className="watch-info">
          <div className="watch-main-info">
            <div className="watch-category-label">
              <span></span>
              {video.category}
            </div>

            <h1>{video.title}</h1>

            <div className="watch-meta">
              <span>{video.year}</span>

              <span className="meta-dot">•</span>

              <span>{video.genre}</span>

              <span className="meta-dot">•</span>

              <span>ADFICTION ORIGINAL</span>
            </div>

            <p className="watch-description">
              {video.description}
            </p>
          </div>

          {/* ACTIONS */}
          <div className="watch-actions">
            <button
              className={
                isFavorite
                  ? "watch-action active"
                  : "watch-action"
              }
              onClick={toggleFavorite}
            >
              {isFavorite ? (
                <FiCheck />
              ) : (
                <FiHeart />
              )}

              <span>
                {isFavorite
                  ? "Added"
                  : "Favorite"}
              </span>
            </button>

            <button
              className="watch-action"
              onClick={copyLink}
            >
              {copied ? <FiCheck /> : <FiCopy />}

              <span>
                {copied ? "Copied" : "Copy Link"}
              </span>
            </button>

            <button
              className="watch-action"
              onClick={shareVideo}
            >
              <FiShare2 />
              <span>Share</span>
            </button>

            <a
              href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="watch-youtube"
            >
              <FiYoutube />
              <span>Watch on YouTube</span>
            </a>
          </div>
        </section>

        {/* PREVIOUS / NEXT */}
        <section className="watch-navigation">
          <div className="watch-navigation-heading">
            <p>CONTINUE WATCHING</p>
            <span>
              {currentIndex + 1} / {categoryVideos.length}
            </span>
          </div>

          <div className="watch-navigation-buttons">
            {previousVideo ? (
              <Link
                to={`/watch/${previousVideo.id}`}
                className="watch-nav-card"
              >
                <div className="watch-nav-icon">
                  <FiArrowLeft />
                </div>

                <div>
                  <small>PREVIOUS</small>
                  <strong>
                    {previousVideo.title}
                  </strong>
                </div>
              </Link>
            ) : (
              <div className="watch-nav-card disabled">
                <div className="watch-nav-icon">
                  <FiArrowLeft />
                </div>

                <div>
                  <small>PREVIOUS</small>
                  <strong>First video</strong>
                </div>
              </div>
            )}

            {nextVideo ? (
              <Link
                to={`/watch/${nextVideo.id}`}
                className="watch-nav-card next"
              >
                <div>
                  <small>NEXT</small>
                  <strong>
                    {nextVideo.title}
                  </strong>
                </div>

                <div className="watch-nav-icon">
                  <FiArrowRight />
                </div>
              </Link>
            ) : (
              <div className="watch-nav-card next disabled">
                <div>
                  <small>NEXT</small>
                  <strong>Last video</strong>
                </div>

                <div className="watch-nav-icon">
                  <FiArrowRight />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* RELATED */}
        <section className="related-section">
          <div className="related-header">
            <div>
              <p>ADFICTION</p>
              <h2>
                MORE TO <span>WATCH</span>
              </h2>
            </div>

            <Link
              to={
                video.category === "Short Films"
                  ? "/short-films"
                  : "/album-songs"
              }
            >
              View All
              <FiArrowRight />
            </Link>
          </div>

          <div className="related-grid">
            {relatedVideos.map((relatedVideo) => (
              <VideoCard
                key={relatedVideo.id}
                video={relatedVideo}
              />
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="watch-footer">
          <div className="watch-footer-logo">
            <span>
              <FiPlay />
            </span>

            ADFICTION
          </div>

          <p>
            Stories beyond reality.
          </p>

          <Link to="/">
            Back to Home
          </Link>
        </footer>
      </main>
    </div>
  );
}

export default Watch;
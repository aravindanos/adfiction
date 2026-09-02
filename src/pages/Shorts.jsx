import { useEffect, useRef, useState } from "react";
import {
  FiArrowLeft,
  FiHeart,
  FiCheck,
  FiVolume2,
  FiVolumeX,
  FiPlay,
  FiPause,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import videos from "../data/videos";
import "../styles/shorts.css";

function Shorts() {
  const shorts = videos.filter(
    (video) => video.category === "Shorts"
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [muted, setMuted] = useState(true);
  const [paused, setPaused] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const containerRef = useRef(null);

  // =====================================================
  // LOAD FAVORITES
  // =====================================================

  useEffect(() => {
    try {
      const saved =
        JSON.parse(
          localStorage.getItem("adfiction-favorites")
        ) || [];

      setFavorites(saved);
    } catch {
      setFavorites([]);
    }
  }, []);

  // =====================================================
  // FAVORITE
  // =====================================================

  const toggleFavorite = (id) => {
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

  // =====================================================
  // DETECT ACTIVE SHORT
  // =====================================================

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const slides =
      container.querySelectorAll(".short-slide");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = [...slides].indexOf(
              entry.target
            );

            if (index !== -1) {
              setActiveIndex(index);
              setPaused(false);
            }
          }
        });
      },
      {
        root: container,
        threshold: 0.65,
      }
    );

    slides.forEach((slide) =>
      observer.observe(slide)
    );

    return () => observer.disconnect();
  }, [shorts.length]);

  // =====================================================
  // MUTE / UNMUTE
  // =====================================================

  const toggleMute = () => {
    setMuted((prev) => !prev);
  };

  // =====================================================
  // PLAY / PAUSE
  // =====================================================

  const togglePause = () => {
    setPaused((prev) => !prev);
  };

  // =====================================================
  // KEYBOARD CONTROLS
  // =====================================================

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Ignore keyboard controls when typing
      if (
        event.target.tagName === "INPUT" ||
        event.target.tagName === "TEXTAREA"
      ) {
        return;
      }

      // NEXT
      if (event.key === "ArrowDown") {
        event.preventDefault();

        const nextIndex = Math.min(
          activeIndex + 1,
          shorts.length - 1
        );

        scrollToShort(nextIndex);
      }

      // PREVIOUS
      if (event.key === "ArrowUp") {
        event.preventDefault();

        const previousIndex = Math.max(
          activeIndex - 1,
          0
        );

        scrollToShort(previousIndex);
      }

      // PLAY / PAUSE
      if (event.code === "Space") {
        event.preventDefault();
        togglePause();
      }

      // MUTE
      if (event.key.toLowerCase() === "m") {
        toggleMute();
      }

      // ESC
      if (event.key === "Escape") {
        window.history.back();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [activeIndex, shorts.length]);

  // =====================================================
  // SCROLL TO SHORT
  // =====================================================

  const scrollToShort = (index) => {
    const container = containerRef.current;

    if (!container) return;

    const slides =
      container.querySelectorAll(".short-slide");

    if (!slides[index]) return;

    slides[index].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // =====================================================
  // EMPTY
  // =====================================================

  if (shorts.length === 0) {
    return (
      <div className="shorts-empty">
        <h1>NO SHORTS YET</h1>

        <Link to="/">
          BACK HOME
        </Link>
      </div>
    );
  }

  // =====================================================
  // PAGE
  // =====================================================

  return (
    <div className="shorts-page">

      {/* BACK */}

      <Link
        to="/"
        className="shorts-back"
      >
        <FiArrowLeft />
        <span>BACK</span>
      </Link>

      {/* BRAND */}

      <div className="shorts-brand">
        AD<span>FICTION</span>
      </div>

      {/* COUNTER */}

      <div className="shorts-counter">
        {String(activeIndex + 1).padStart(2, "0")}

        <span>/</span>

        {String(shorts.length).padStart(2, "0")}
      </div>

      {/* SHORTS CONTAINER */}

      <div
        className="shorts-container"
        ref={containerRef}
      >

        {shorts.map((video, index) => {

          const isActive =
            index === activeIndex;

          const isPaused =
            isActive && paused;

          return (
            <section
              className="short-slide"
              key={video.id}
            >

              <div className="short-video-wrap">

                {/* ======================================
                    YOUTUBE SHORT
                ====================================== */}

                <iframe
                  key={`${video.id}-${muted}-${isPaused}`}
                  className="short-video"
                  src={
                    `https://www.youtube.com/embed/${video.youtubeId}` +
                    `?autoplay=${isActive && !isPaused ? 1 : 0}` +
                    `&mute=${muted ? 1 : 0}` +
                    `&playsinline=1` +
                    `&controls=0` +
                    `&rel=0` +
                    `&modestbranding=1` +
                    `&enablejsapi=1` +
                    `&loop=1` +
                    `&playlist=${video.youtubeId}`
                  }
                  title={video.title}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />

                {/* ======================================
                    OVERLAY
                ====================================== */}

                <div className="short-overlay" />

                {/* ======================================
                    CENTER PLAY / PAUSE
                ====================================== */}

                <button
                  className="short-center-play"
                  onClick={togglePause}
                  aria-label={
                    paused
                      ? "Play"
                      : "Pause"
                  }
                >
                  {paused ? (
                    <FiPlay />
                  ) : (
                    <FiPause />
                  )}
                </button>

                {/* ======================================
                    CONTENT
                ====================================== */}

                <div className="short-content">

                  <span className="short-category">
                    ADFICTION SHORTS
                  </span>

                  <h2>
                    {video.title}
                  </h2>

                  <p>
                    {video.description}
                  </p>

                  <div className="short-meta">

                    <span>
                      {video.year}
                    </span>

                    <span>
                      •
                    </span>

                    <span>
                      {video.genre}
                    </span>

                  </div>

                </div>

                {/* ======================================
                    ACTIONS
                ====================================== */}

                <div className="short-actions">

                  {/* FAVORITE */}

                  <button
                    className={
                      favorites.includes(video.id)
                        ? "short-action active"
                        : "short-action"
                    }
                    onClick={() =>
                      toggleFavorite(video.id)
                    }
                    aria-label="Favorite"
                  >
                    {favorites.includes(
                      video.id
                    ) ? (
                      <FiCheck />
                    ) : (
                      <FiHeart />
                    )}
                  </button>

                  {/* SOUND */}

                  <button
                    className="short-action"
                    onClick={toggleMute}
                    aria-label={
                      muted
                        ? "Unmute"
                        : "Mute"
                    }
                  >
                    {muted ? (
                      <FiVolumeX />
                    ) : (
                      <FiVolume2 />
                    )}
                  </button>

                </div>

                {/* ======================================
                    ACTIVE LINE
                ====================================== */}

                {isActive && (
                  <div className="short-active-line" />
                )}

              </div>

            </section>
          );
        })}

      </div>

      {/* ================================================
          MOBILE SWIPE HINT
      ================================================ */}

      <div className="shorts-swipe-hint">
        SWIPE UP TO EXPLORE
      </div>

    </div>
  );
}

export default Shorts;
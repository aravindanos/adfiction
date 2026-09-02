import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiCheck,
  FiHeart,
  FiPlay,
} from "react-icons/fi";

import "../styles/cards.css";

function VideoCard({ video }) {
  const cardRef = useRef(null);

  const [imageLoaded, setImageLoaded] =
    useState(false);

  const [isFavorite, setIsFavorite] =
    useState(false);

  const thumbnail =
    `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;

  useEffect(() => {
    try {
      const saved =
        JSON.parse(
          localStorage.getItem(
            "adfiction-favorites"
          )
        ) || [];

      setIsFavorite(
        saved.includes(video.id)
      );
    } catch {
      setIsFavorite(false);
    }
  }, [video.id]);

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;

    if (
      window.matchMedia(
        "(pointer: coarse)"
      ).matches
    ) {
      return;
    }

    const rect =
      cardRef.current.getBoundingClientRect();

    const x =
      event.clientX -
      rect.left -
      rect.width / 2;

    const y =
      event.clientY -
      rect.top -
      rect.height / 2;

    const rotateY =
      (x / rect.width) * 8;

    const rotateX =
      -(y / rect.height) * 8;

    cardRef.current.style.transform =
      `perspective(1000px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)
       translateY(-12px)
       scale(1.025)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    cardRef.current.style.transform =
      "";
  };

  const toggleFavorite = (event) => {
    event.preventDefault();
    event.stopPropagation();

    try {
      const saved =
        JSON.parse(
          localStorage.getItem(
            "adfiction-favorites"
          )
        ) || [];

      let updated;

      if (saved.includes(video.id)) {
        updated = saved.filter(
          (id) => id !== video.id
        );
      } else {
        updated = [
          ...saved,
          video.id,
        ];
      }

      localStorage.setItem(
        "adfiction-favorites",
        JSON.stringify(updated)
      );

      setIsFavorite(
        updated.includes(video.id)
      );
    } catch {
      // Ignore localStorage errors.
    }
  };

  return (
    <Link
      to={`/watch/${video.id}`}
      className="video-card"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="video-card-image">
        {!imageLoaded && (
          <div className="thumbnail-loading">
            Loading...
          </div>
        )}

        <img
          src={thumbnail}
          alt={video.title}
          onLoad={() =>
            setImageLoaded(true)
          }
          onError={(event) => {
            event.currentTarget.src =
              `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
          }}
        />

        <div className="video-card-overlay"></div>

        <div className="video-card-play">
          <FiPlay />
        </div>

        <button
          className={
            isFavorite
              ? "video-card-add active"
              : "video-card-add"
          }
          onClick={toggleFavorite}
          aria-label={
            isFavorite
              ? "Remove from favorites"
              : "Add to favorites"
          }
        >
          {isFavorite ? (
            <FiCheck />
          ) : (
            <FiHeart />
          )}
        </button>

        <div className="video-card-info">
          <span className="video-category">
            {video.category}
          </span>

          <h3>{video.title}</h3>

          <div className="video-meta">
            <span>{video.year}</span>
            <span>•</span>
            <span>{video.genre}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;
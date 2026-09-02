import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import VideoCard from "./VideoCard";

import "../styles/video-row.css";

function VideoRow({ title, videos }) {
  const rowRef = useRef(null);

  const scroll = (direction) => {
    if (!rowRef.current) return;

    const amount = 500;

    rowRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  if (!videos.length) {
    return null;
  }

  return (
    <section className="video-row-section">

      <div className="video-row-header">

        <div>
          <p className="row-label">
            ADFICTION
          </p>

          <h2>{title}</h2>
        </div>

        <div className="row-controls">

          <button onClick={() => scroll("left")}>
            <FiChevronLeft />
          </button>

          <button onClick={() => scroll("right")}>
            <FiChevronRight />
          </button>

        </div>

      </div>

      <div
        className="video-row"
        ref={rowRef}
      >
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
          />
        ))}
      </div>

    </section>
  );
}

export default VideoRow;
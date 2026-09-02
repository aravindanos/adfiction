import { useParams, Link } from "react-router-dom";
import { FiArrowLeft, FiPlay } from "react-icons/fi";

import videos from "../data/videos";
import "../styles/video-player.css";

function VideoPlayer() {
  const { id } = useParams();

  const video = videos.find((item) => item.id === id);

  // If video doesn't exist
  if (!video) {
    return (
      <div className="video-not-found">
        <h1>VIDEO NOT FOUND</h1>
        <p>The video you're looking for doesn't exist.</p>

        <Link to="/" className="back-home">
          <FiArrowLeft />
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <main className="video-player-page">

      {/* BACK */}
      <Link to="/" className="video-back">
        <FiArrowLeft />
        Back
      </Link>

      {/* VIDEO */}
      <section className="video-player-container">

        <div className="video-frame">

          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />

        </div>

      </section>

      {/* INFORMATION */}
      <section className="video-information">

        <div className="video-category">
          {video.category}
        </div>

        <h1>{video.title}</h1>

        <div className="video-meta">
          <span>{video.year}</span>
          <span>•</span>
          <span>{video.genre}</span>
        </div>

        <p>{video.description}</p>

      </section>

      {/* MORE VIDEOS */}
      <section className="more-videos">

        <div className="more-videos-heading">
          <span>ADFICTION</span>
          <h2>MORE STORIES</h2>
        </div>

        <div className="more-videos-grid">

          {videos
            .filter(
              (item) =>
                item.category === video.category &&
                item.id !== video.id
            )
            .slice(0, 4)
            .map((item) => (

              <Link
                key={item.id}
                to={`/watch/${item.id}`}
                className="more-video-card"
              >

                <div className="more-video-thumbnail">

                  <img
                    src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
                    alt={item.title}
                  />

                  <div className="more-video-play">
                    <FiPlay />
                  </div>

                </div>

                <div className="more-video-info">
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.year} • {item.genre}</p>
                </div>

              </Link>

            ))}

        </div>

      </section>

    </main>
  );
}

export default VideoPlayer;
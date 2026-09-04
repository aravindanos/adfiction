import { FiPlay, FiYoutube, FiArrowUpRight, FiFilm } from "react-icons/fi";
import "../styles/srvmedia.css";
  
import srvIntro from "/intro1.mp4";

function SRVMedia() {
  const channelUrl = "https://www.youtube.com/@SRVMedia1";

  const openChannel = () => {
    window.open(channelUrl, "_blank", "noopener,noreferrer");
  };
 

  return (
    <section className="srv-media-section">
      {/* Background Elements */}
      <div className="srv-bg-glow srv-glow-one"></div>
      <div className="srv-bg-glow srv-glow-two"></div>
      <div className="srv-grid"></div>

      <div className="srv-container">

        {/* LEFT CONTENT */}
        <div className="srv-content">

          <div className="srv-overline">
            <span></span>
            SECOND CHANNEL
          </div>

          <h2>
            SRV <em>MEDIA</em>
          </h2>

          <div className="srv-title-line"></div>

          <p className="srv-description">
            Stories, creativity and entertainment brought together in one
            cinematic space. Discover original videos, creative projects and
            visual experiences from SRV MEDIA.
          </p>

          {/* Channel Stats */}
          <div className="srv-mini-info">
            <div className="srv-info-item">
              <FiFilm />
              <div>
                <span>CHANNEL</span>
                <strong>SRV MEDIA</strong>
              </div>
            </div>

            <div className="srv-info-divider"></div>

            <div className="srv-info-item">
              <FiYoutube />
              <div>
                <span>PLATFORM</span>
                <strong>YOUTUBE</strong>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="srv-buttons">

            <button
              className="srv-watch-btn"
              onClick={openChannel}
            >
              <FiYoutube />
              VISIT CHANNEL
              <FiArrowUpRight />
            </button>
 

          </div>

          {/* Navigation */}
          <div className="srv-navigation">
            <span className="srv-nav-label">
              EXPLORE SRV MEDIA
            </span>

            <div className="srv-nav-links"> 
              <button onClick={openChannel}>CHANNEL</button> 
            </div>
          </div>

        </div>


        {/* RIGHT VIDEO */}
        <div className="srv-visual">

          <div className="srv-orbit srv-orbit-one"></div>
          <div className="srv-orbit srv-orbit-two"></div>

          <div className="srv-video-wrapper">

            <div className="srv-video-shadow"></div>

            <div className="srv-video-frame">

              <video
                className="srv-intro-video"
                src={srvIntro}
                autoPlay
                muted
                loop
                playsInline
              />

              <div className="srv-video-overlay"></div>

              <div className="srv-video-top">
                <span className="srv-live-dot"></span>
                <span>SRV MEDIA</span>
                <span>MANIKANDAN SS</span>
              </div>

              <div className="srv-video-bottom">
                <div>
                  <small>CREATIVE STUDIO</small>
                  <strong>VISUAL STORIES</strong>
                </div>

                <div className="srv-video-icon">
                  <FiPlay />
                </div>
              </div>

            </div>

            {/* 3D Floating Label */}
            <div className="srv-floating-card">
              <FiFilm />
              <div>
                <span>NOW SHOWING</span>
                <strong>SRV MEDIA</strong>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default SRVMedia;
import React from "react";
import "../styles/adfiction-channel.css";

import adfictionIntro from "/intro.mp4";

function Fiction() {
  return (
    <section className="adfiction-channel">

      {/* 3D BACKGROUND */}
      <div className="adfiction-noise"></div>
      <div className="adfiction-grid"></div>
      <div className="adfiction-light light-one"></div>
      <div className="adfiction-light light-two"></div>

      <div className="adfiction-container">

        {/* ================= LEFT ================= */}

        <div className="adfiction-content">

          <div className="adfiction-eyebrow">
            ADFICTION
            <span></span>
            ORIGINAL CHANNEL
          </div>

          <h2 className="adfiction-title">
            <span>STORIES</span>
            <span className="outline">BEYOND</span>
            <span>CINEMA.</span>
          </h2>

          <div className="adfiction-description">
            ADFICTION is a cinematic platform for original short
            films, music, stories and visual experiences.
            Created for people who believe every frame has a story.
          </div>

          <div className="adfiction-line"></div>

          <div className="adfiction-meta">

            <div>
              <small>01</small>
              <strong>SHORT FILMS</strong>
              <p>Original stories</p>
            </div>

            <div>
              <small>02</small>
              <strong>ALBUM SONGS</strong>
              <p>Cinematic experiences</p>
            </div>

            <div>
              <small>03</small>
              <strong>SHORTS</strong>
              <p>Watch the latest</p>
            </div>

          </div>

          <div className="adfiction-buttons">

            <a
              href="https://www.youtube.com/@adfictionyt"
              target="_blank"
              rel="noopener noreferrer"
              className="adfiction-watch"
            >
              <span>VISIT ADFICTION</span>
              <b>↗</b>
            </a>

            <a
              href="#trailers"
              className="adfiction-explore"
            >
              EXPLORE COLLECTION
            </a>

          </div>

        </div>


        {/* ================= RIGHT ================= */}

        <div className="adfiction-visual">

          {/* Back 3D panel */}
          <div className="back-panel"></div>

          {/* Main perspective */}
          <div className="adfiction-perspective">

            <div className="adfiction-video-card">

              {/* Top */}
              <div className="video-header">

                <div className="header-left">
                  <span className="header-dot"></span>
                  ADFICTION
                </div>

                <div className="header-right">
                  001 / ORIGINAL
                </div>

              </div>


              {/* Video */}
              <div className="adfiction-video-wrapper">

                <video
                  src={adfictionIntro}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="adfiction-video"
                />

                <div className="cinematic-overlay"></div>
 


                {/* Bottom */}
                <div className="video-footer">

                  <span>WATCH</span>
                  <i></i>
                  <span>CREATE</span>
                  <i></i>
                  <span>INSPIRE</span>

                </div>

              </div>

            </div>


            {/* Floating 3D card */}

            <div className="floating-info">

              <div className="floating-number">
                01
              </div>

              <div className="floating-text">

                <span>NOW PLAYING</span>

                <strong>
                  ADFICTION INTRO
                </strong>

              </div>

            </div>

          </div>


          {/* Perspective floor */}

          <div className="perspective-floor"></div>

        </div>

      </div>

    </section>
  );
}

export default Fiction;
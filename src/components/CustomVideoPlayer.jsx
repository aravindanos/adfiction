import { useEffect, useRef, useState } from "react";
import {
  FiPlay,
  FiPause,
  FiVolume2,
  FiVolumeX,
  FiMaximize,
  FiMinimize,
  FiSettings,
  FiRotateCcw,
  FiRotateCw,
} from "react-icons/fi";
import "../styles/custom-video-player.css";

function CustomVideoPlayer({ video }) {
  const iframeRef = useRef(null);
  const playerRef = useRef(null);
  const progressTimer = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(100);
  const [muted, setMuted] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [showSettings, setShowSettings] = useState(false);

  /*
   * YouTube API
   */
  useEffect(() => {
    const loadYouTubeAPI = () => {
      if (window.YT && window.YT.Player) {
        createPlayer();
        return;
      }

      const existingScript = document.querySelector(
        'script[src="https://www.youtube.com/iframe_api"]'
      );

      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(script);
      }

      window.onYouTubeIframeAPIReady = createPlayer;
    };

    const createPlayer = () => {
      if (!iframeRef.current || playerRef.current) return;

      playerRef.current = new window.YT.Player(iframeRef.current, {
        events: {
          onReady: (event) => {
            setIsReady(true);
            setDuration(event.target.getDuration());
            setVolume(event.target.getVolume());
          },

          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
              startProgress();
            }

            if (
              event.data === window.YT.PlayerState.PAUSED ||
              event.data === window.YT.PlayerState.ENDED
            ) {
              setIsPlaying(false);
              stopProgress();
            }

            if (event.data === window.YT.PlayerState.ENDED) {
              setCurrentTime(0);
            }
          },
        },
      });
    };

    loadYouTubeAPI();

    return () => {
      stopProgress();

      if (playerRef.current?.destroy) {
        playerRef.current.destroy();
      }

      playerRef.current = null;
    };
  }, [video.youtubeId]);

  /*
   * Progress
   */
  const startProgress = () => {
    stopProgress();

    progressTimer.current = setInterval(() => {
      if (playerRef.current?.getCurrentTime) {
        setCurrentTime(playerRef.current.getCurrentTime());
        setDuration(playerRef.current.getDuration());
      }
    }, 500);
  };

  const stopProgress = () => {
    if (progressTimer.current) {
      clearInterval(progressTimer.current);
      progressTimer.current = null;
    }
  };

  /*
   * Play / Pause
   */
  const togglePlay = () => {
    if (!playerRef.current) return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  /*
   * Seek
   */
  const seek = (seconds) => {
    if (!playerRef.current) return;

    const newTime = Math.max(
      0,
      Math.min(duration, currentTime + seconds)
    );

    playerRef.current.seekTo(newTime, true);
    setCurrentTime(newTime);
  };

  /*
   * Progress click
   */
  const handleProgress = (e) => {
    if (!duration || !playerRef.current) return;

    const rect = e.currentTarget.getBoundingClientRect();

    const percentage =
      (e.clientX - rect.left) / rect.width;

    const newTime = percentage * duration;

    playerRef.current.seekTo(newTime, true);
    setCurrentTime(newTime);
  };

  /*
   * Volume
   */
  const handleVolume = (e) => {
    const value = Number(e.target.value);

    setVolume(value);

    if (!playerRef.current) return;

    playerRef.current.setVolume(value);

    if (value === 0) {
      playerRef.current.mute();
      setMuted(true);
    } else {
      playerRef.current.unMute();
      setMuted(false);
    }
  };

  const toggleMute = () => {
    if (!playerRef.current) return;

    if (muted) {
      playerRef.current.unMute();
      playerRef.current.setVolume(volume || 80);
      setMuted(false);
    } else {
      playerRef.current.mute();
      setMuted(true);
    }
  };

  /*
   * Fullscreen
   */
  const toggleFullscreen = async () => {
    const container = document.querySelector(
      ".custom-video-player"
    );

    if (!container) return;

    if (!document.fullscreenElement) {
      await container.requestFullscreen();
      setFullscreen(true);

      try {
        await screen.orientation?.lock?.("landscape");
      } catch {
        // Browser does not support orientation lock
      }
    } else {
      await document.exitFullscreen();
      setFullscreen(false);

      try {
        screen.orientation?.unlock?.();
      } catch {
        // Ignore
      }
    }
  };

  /*
   * Fullscreen state
   */
  useEffect(() => {
    const handleFullscreen = () => {
      setFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener(
      "fullscreenchange",
      handleFullscreen
    );

    return () => {
      document.removeEventListener(
        "fullscreenchange",
        handleFullscreen
      );
    };
  }, []);

  /*
   * Format time
   */
  const formatTime = (time) => {
    if (!time || Number.isNaN(time)) {
      return "00:00";
    }

    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);

    if (hours > 0) {
      return `${String(hours).padStart(2, "0")}:${String(
        minutes
      ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }

    return `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
  };

  /*
   * Mouse controls
   */
  let hideTimer;

  const handleMouseMove = () => {
    setShowControls(true);

    clearTimeout(hideTimer);

    if (isPlaying) {
      hideTimer = setTimeout(() => {
        setShowControls(false);
      }, 2500);
    }
  };

  /*
   * Keyboard
   */
  useEffect(() => {
    const handleKeyboard = (e) => {
      if (!isReady) return;

      if (e.code === "Space") {
        e.preventDefault();
        togglePlay();
      }

      if (e.key === "ArrowLeft") {
        seek(-10);
      }

      if (e.key === "ArrowRight") {
        seek(10);
      }

      if (e.key === "m") {
        toggleMute();
      }

      if (e.key === "f") {
        toggleFullscreen();
      }
    };

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyboard
      );
    };
  });

  return (
    <div
      className={`custom-video-player ${
        fullscreen ? "is-fullscreen" : ""
      }`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        if (isPlaying) {
          setShowControls(false);
        }
      }}
    >
      {/* VIDEO */}
      <div className="custom-video-screen">
        <iframe
          ref={iframeRef}
          src={`https://www.youtube.com/embed/${video.youtubeId}?enablejsapi=1&rel=0&modestbranding=1&playsinline=1&controls=0`}
          title={video.title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />

        {/* Loading */}
        {!isReady && (
          <div className="video-loading">
            <div className="loading-spinner"></div>
            <span>LOADING</span>
          </div>
        )}

        {/* Center play */}
        {isReady && !isPlaying && (
          <button
            className="center-play-button"
            onClick={togglePlay}
            aria-label="Play"
          >
            <FiPlay />
          </button>
        )}

        {/* CINEMATIC OVERLAY */}
        <div className="cinematic-overlay"></div>

        {/* TOP BRAND */}
        <div className="player-brand">
          <span>ADFICTION</span>
          <small>ORIGINAL</small>
        </div>

        {/* CONTROLS */}
        <div
          className={`custom-player-controls ${
            showControls ? "visible" : ""
          }`}
        >
          {/* Progress */}
          <div
            className="custom-progress"
            onClick={handleProgress}
          >
            <div
              className="custom-progress-buffer"
              style={{
                width: duration
                  ? `${(currentTime / duration) * 100}%`
                  : "0%",
              }}
            />

            <div
              className="custom-progress-dot"
              style={{
                left: duration
                  ? `${(currentTime / duration) * 100}%`
                  : "0%",
              }}
            />
          </div>

          <div className="controls-bottom">
            <div className="controls-left">
              {/* Play */}
              <button
                className="control-button"
                onClick={togglePlay}
              >
                {isPlaying ? <FiPause /> : <FiPlay />}
              </button>

              {/* Rewind */}
              <button
                className="control-button"
                onClick={() => seek(-10)}
                title="Rewind 10 seconds"
              >
                <FiRotateCcw />
                <span className="skip-number">10</span>
              </button>

              {/* Forward */}
              <button
                className="control-button"
                onClick={() => seek(10)}
                title="Forward 10 seconds"
              >
                <FiRotateCw />
                <span className="skip-number">10</span>
              </button>

              {/* Volume */}
              <div className="volume-control">
                <button
                  className="control-button"
                  onClick={toggleMute}
                >
                  {muted || volume === 0 ? (
                    <FiVolumeX />
                  ) : (
                    <FiVolume2 />
                  )}
                </button>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={muted ? 0 : volume}
                  onChange={handleVolume}
                  className="volume-slider"
                />
              </div>

              {/* Time */}
              <div className="video-time">
                <span>{formatTime(currentTime)}</span>
                <i>/</i>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            <div className="controls-right">
              {/* Settings */}
              <div className="settings-wrapper">
                <button
                  className="control-button"
                  onClick={() =>
                    setShowSettings(!showSettings)
                  }
                >
                  <FiSettings />
                </button>

                {showSettings && (
                  <div className="settings-menu">
                    <div className="settings-title">
                      PLAYBACK
                    </div>

                    <button>Auto</button>
                    <button>Quality</button>
                    <button>Playback speed</button>
                  </div>
                )}
              </div>

              {/* Fullscreen */}
              <button
                className="control-button"
                onClick={toggleFullscreen}
              >
                {fullscreen ? (
                  <FiMinimize />
                ) : (
                  <FiMaximize />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomVideoPlayer;
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiMenu,
  FiX,
  FiArrowUpRight,
  FiPlay,
} from "react-icons/fi";

import videos from "../data/videos";
import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
    setMenuOpen(false);

    if (searchOpen) {
      setSearchQuery("");
    }
  };

  const filteredVideos = videos.filter((video) => {
    const query = searchQuery.toLowerCase().trim();

    if (!query) return false;

    return (
      video.title.toLowerCase().includes(query) ||
      video.category.toLowerCase().includes(query) ||
      video.genre.toLowerCase().includes(query) ||
      video.year.toLowerCase().includes(query) ||
      video.description.toLowerCase().includes(query)
    );
  });

  return (
    <header className={`navbar ${menuOpen ? "menu-open" : ""}`}>

      {/* LOGO */}
      <Link
        to="/"
        className="navbar-logo"
        onClick={closeMenu}
      >
        <div className="logo-3d">
          <div className="logo-face">
            <img
              src="/logo.png"
              alt="ADFICTION"
            />
          </div>

          <div className="logo-depth"></div>
        </div>

        <span className="logo-text">
          ADFICTION
        </span>
      </Link>


      {/* NAVIGATION */}
      <nav
        className={`nav-links ${
          menuOpen ? "active" : ""
        }`}
      >

        <div className="nav-mobile-header">
          <span>MENU</span>
          <span>01 — 04</span>
        </div>

        <Link to="/" onClick={closeMenu}>
          <span className="nav-number">01</span>
          <span>Home</span>
          <FiArrowUpRight />
        </Link>

        <Link
          to="/short-films"
          onClick={closeMenu}
        >
          <span className="nav-number">02</span>
          <span>Short Films</span>
          <FiArrowUpRight />
        </Link>

        <Link
          to="/album-songs"
          onClick={closeMenu}
        >
          <span className="nav-number">03</span>
          <span>Album Songs</span>
          <FiArrowUpRight />
        </Link>

        <Link
          to="/about"
          onClick={closeMenu}
        >
          <span className="nav-number">04</span>
          <span>About</span>
          <FiArrowUpRight />
        </Link>

        <div className="mobile-menu-footer">
          <span>ADFICTION ORIGINALS</span>
          <span>EST. 2025</span>
        </div>

      </nav>


      {/* ACTIONS */}
      <div className="navbar-actions">

        {/* SEARCH */}
        <button
          className={`search-button ${
            searchOpen ? "search-active" : ""
          }`}
          onClick={handleSearchToggle}
          aria-label="Search"
        >
          {searchOpen ? (
            <FiX />
          ) : (
            <FiSearch />
          )}

          <span>
            {searchOpen ? "CLOSE" : "SEARCH"}
          </span>
        </button>


        {/* MENU */}
        <button
          className="menu-button"
          onClick={() => {
            setMenuOpen(!menuOpen);
            setSearchOpen(false);
          }}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="menu-icon">
            {menuOpen ? (
              <FiX />
            ) : (
              <FiMenu />
            )}
          </span>

          <span className="menu-label">
            {menuOpen ? "CLOSE" : "MENU"}
          </span>
        </button>

      </div>


      {/* =================================================
          SEARCH PANEL
      ================================================= */}

      <div
        className={`search-panel ${
          searchOpen ? "search-panel-active" : ""
        }`}
      >

        <div className="search-panel-inner">

          {/* SEARCH HEADER */}

          <div className="search-heading">

            <span>
              ADFICTION SEARCH
            </span>

            <small>
              {videos.length} ORIGINALS
            </small>

          </div>


          {/* SEARCH INPUT */}

          <div className="search-input-wrapper">

            <FiSearch />

            <input
              type="text"
              placeholder="Search films, songs, titles..."
              value={searchQuery}
              onChange={(e) =>
                setSearchQuery(e.target.value)
              }
              autoFocus={searchOpen}
            />

            {searchQuery && (
              <button
                className="clear-search"
                onClick={() =>
                  setSearchQuery("")
                }
              >
                <FiX />
              </button>
            )}

          </div>


          {/* RESULTS */}

          <div className="search-results">

            {!searchQuery && (
              <div className="search-empty">

                <FiSearch />

                <p>
                  Search ADFICTION Originals
                </p>

                <span>
                  Films • Songs • Music • 2026
                </span>

              </div>
            )}


            {searchQuery &&
              filteredVideos.length === 0 && (
                <div className="search-empty">

                  <span className="empty-number">
                    404
                  </span>

                  <p>
                    No results found
                  </p>

                  <span>
                    Try another title or keyword
                  </span>

                </div>
              )}


            {filteredVideos.length > 0 && (
              <div className="search-result-list">

                {filteredVideos.map((video, index) => (

                 <Link
          key={video.id}
          to={`/watch/${video.id}`}
          className="search-result"
          onClick={() => {
            setSearchOpen(false);
            setSearchQuery("");
          }}
        >

                    <div className="result-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>


                    <div className="result-thumbnail">

                      <img
                        src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                        alt={video.title}
                      />

                      <div className="result-play">
                        <FiPlay />
                      </div>

                    </div>


                    <div className="result-info">

                      <span className="result-category">
                        {video.category}
                      </span>

                      <h3>
                        {video.title}
                      </h3>

                      <p>
                        {video.year} • {video.genre}
                      </p>

                    </div>


                    <FiArrowUpRight className="result-arrow" />

                  </Link>

                ))}

              </div>
            )}

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import CinematicLoader from "./components/CinematicLoader";
import CinematicEffects from "./components/CinematicEffects";

import Home from "./pages/Home";
import Watch from "./pages/Watch";
import ShortFilms from "./pages/ShortFilms";
import AlbumSongs from "./pages/AlbumSongs";
import VideoPlayer from "./pages/VideoPlayer";
import About from "./pages/About";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{
          opacity: 0,
          y: 12,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -12,
        }}
        transition={{
          duration: 0.45,
          ease: "easeInOut",
        }}
      >
        <Routes location={location}>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/short-films"
            element={<ShortFilms />}
          />

          <Route
            path="/album-songs"
            element={<AlbumSongs />}
          />

          <Route
            path="/watch/:videoId"
            element={<Watch />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/watch/:id" element={<VideoPlayer />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <>
      <CinematicLoader />
      <CinematicEffects />

      <AnimatedRoutes />
    </>
  );
}

export default App;
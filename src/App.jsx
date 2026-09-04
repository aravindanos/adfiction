import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

import CinematicLoader from "./components/CinematicLoader";
import CinematicEffects from "./components/CinematicEffects";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import ShortFilms from "./pages/ShortFilms";
import AlbumSongs from "./pages/AlbumSongs";
import VideoPlayer from "./pages/VideoPlayer";
import About from "./pages/About";
import Favorites from "./pages/Favorites";
import Channels from "./pages/Channels";
import Shorts from "./pages/Shorts";
import Movies from "./pages/Movies";
import Trailers from "./pages/Trailers";
import ShortFilmCompetition from "./pages/ShortFilmCompetition";
import HomeCompetition from "./components/HomeCompetition";
import SRVMedia from "./components/SRVMedia";   
import Fiction from "./components/Fiction";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Analytics />
      <ScrollToTop />
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
            path="/movies"
            element={<Movies />}
          />
             <Route
            path="/trailers"
            element={<Trailers />}
          />
               <Route
            path="/shortfilmcompetition"
            element={<ShortFilmCompetition />}
          />
                  <Route
            path="/homecompetition"
            element={<HomeCompetition />}
          />

                    <Route
            path="/srvmedia"
            element={<SRVMedia />}
          />

  <Route path="/fiction" element={<Fiction />} />

           
<Route
  path="/channels"
  element={<Channels />}
/>

  <Route path="/shorts" element={<Shorts />} />
  <Route path="/trailers" element={<Trailers />} />
          <Route
            path="/watch/:videoId"
            element={<Watch />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<Favorites />} /> 
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
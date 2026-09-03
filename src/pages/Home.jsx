import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Channels from "../pages/Channels"; 
import VideoRow from "../components/VideoRow"; 

import videos from "../data/videos";
import Reveal from "../components/Reveal";
import HomeCompetition from './../components/HomeCompetition';

function Home() {

  const shortFilms = videos.filter(
    (video) => video.category === "Short Films"
  );

  const albumSongs = videos.filter(
    (video) => video.category === "Album Songs"
  );
  const trailers = videos.filter(
    (video) => video.category === "Trailers"
  );

    const movies = videos.filter(
    (video) => video.category === "Movies"
  );


const latest = [...videos].sort(
  (a, b) => Number(b.year) - Number(a.year)
);

  return (
    <div className="app">

      <Navbar />

      <main>

        <Hero />

      <section className="content-section">
  <Reveal>
 <VideoRow 
  title="Latest Releases" 
  videos={latest}
/>
  </Reveal>

  <Reveal delay={0.08}>
    <VideoRow
      title="Short Films"
      videos={shortFilms}
    />
  </Reveal>

  <Reveal delay={0.16}>
    <VideoRow
      title="Album Songs"
      videos={albumSongs}
    />
  </Reveal>
    <Reveal delay={0.16}>
    <VideoRow
      title="Movies"
      videos={movies}
    />
  </Reveal>

  
    <Reveal delay={0.16}>
    <VideoRow
      title="Trailers And Making"
      videos={trailers}
    />
  </Reveal>
</section>
        <HomeCompetition />

        <Channels />

      <Reveal>
  <section className="home-intro">
    <p className="section-label">
      ADFICTION
    </p>

    <h2>
      STORIES
      <span> BEYOND </span>
      REALITY
    </h2>

    <p className="intro-text">
      Cinema, music and stories created to
      make you feel something.
    </p>
  </section>
</Reveal>
     <Footer />
      </main>

    </div>
  );
}

export default Home;
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import VideoRow from "../components/VideoRow";

import videos from "../data/videos";
import Reveal from "../components/Reveal";

function Home() {

  const shortFilms = videos.filter(
    (video) => video.category === "Short Films"
  );

  const albumSongs = videos.filter(
    (video) => video.category === "Album Songs"
  );

  const latest = [...videos].reverse();

  return (
    <div className="app">

      <Navbar />

      <main>

        <Hero />

      <section className="content-section">
  <Reveal>
    <VideoRow
      title="Latest Releases"
      videos={videos}
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
</section>

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
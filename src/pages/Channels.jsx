import {
  FiArrowUpRight,
  FiPlay,
  FiYoutube,
} from "react-icons/fi";

import "../styles/channels.css";

function Channels() {
  const channels = [
    {
      id: "01",
      name: "ADFICTION",
      handle: "@adfictionyt",
      head:"Aravindan OS",
      description:
        "Original short films, music, visual stories and cinematic creations.",
      url: "https://www.youtube.com/@adfictionyt",
      logo: "/logo.png",
    },
    {
      id: "02",
      name: "SRV MEDIA",
      handle: "@SRVMedia1",
      head:"Manikandan",
      description:
        "A creative media channel for stories, visuals and entertainment.",
      url: "https://www.youtube.com/@SRVMedia1",
      logo: "/srvlogo.png",
    },
  ];

  return (
    <main className="channels-page">

      {/* HERO */}

      <section className="channels-hero">

        <div className="channels-grid"></div>

        <div className="channels-orbit orbit-one"></div>
        <div className="channels-orbit orbit-two"></div>

        <div className="channels-hero-content">

          <span className="channels-eyebrow">
            ADFICTION / NETWORK
          </span>

          <h1>
            OUR
            <span>CHANNELS</span>
          </h1>

          <p>
            Two creative spaces.
            <br />
            One vision — stories beyond reality.
          </p>

        </div>

        <div className="channels-scroll">
          <span>SCROLL TO EXPLORE</span>
          <div></div>
        </div>

      </section>


      {/* CHANNELS */}

      <section className="channels-section">

        <div className="channels-section-heading">

          <div>
            <span>01 / NETWORK</span>

            <h2>
              WATCH.
              <br />
              <strong>EXPLORE.</strong>
            </h2>
          </div>

          <p>
            Explore our official YouTube channels
            and discover the stories behind the
            ADFICTION creative universe.
          </p>

        </div>


        <div className="channels-list">

          {channels.map((channel, index) => (

            <a
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`channel-card channel-card-${index + 1}`}
              key={channel.id}
            >

              {/* NUMBER */}

              <div className="channel-number">
                {channel.id}
              </div>


              {/* 3D CARD */}

              <div className="channel-card-inner">

                <div className="channel-card-top">

                  <span>
                    OFFICIAL CHANNEL
                  </span>

                  <FiArrowUpRight />

                </div>


                {/* LOGO */}

                <div className="channel-logo-area">

                  <div className="channel-logo-glow"></div>

                  <div className="channel-logo-frame">

                    <img
                      src={channel.logo}
                      alt={channel.name}
                    />

                  </div>

                </div>


                {/* INFO */}

                <div className="channel-info">

                  <span className="channel-handle">
                    {channel.handle}
                  </span>

                  <h3>
                    {channel.name}
                  </h3>
   <p>
                    {channel.head}
                  </p>
                  <p>
                    {channel.description}
                  </p>


                </div>


                {/* FOOTER */}

                <div className="channel-card-footer">

                  <span>
                    VISIT CHANNEL
                  </span>

                  <div className="channel-play">

                    <FiYoutube />

                  </div>

                </div>

              </div>

            </a>

          ))}

        </div>

      </section>


      {/* FINAL CTA */}

      <section className="channels-final">

        <span>
          ADFICTION / CREATIVE NETWORK
        </span>

        <h2>
          STORIES
          <br />
          <strong>BEYOND</strong>
          <br />
          REALITY.
        </h2>

        <a
          href="https://www.youtube.com/@adfictionyt"
          target="_blank"
          rel="noopener noreferrer"
          className="channels-final-button"
        >
          <FiPlay />
          <span>WATCH ADFICTION</span>
          <FiArrowUpRight />
        </a>

      </section>

    </main>
  );
}

export default Channels;
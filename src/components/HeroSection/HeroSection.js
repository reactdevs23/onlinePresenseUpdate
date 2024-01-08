import React from "react";
import ReactPlayer from "react-player";
import styles from "./HeroSection.module.css";

const Herosection = () => {
  return (
    <section className="mainWrapper" id="hero">
      <div className={styles.wrapper}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>
            We're giving you access to a{" "}
            <span className="highlight">
              MASTERCLASS ON HOW TO BUILD YOUR ONLINE PRESENCE
            </span>{" "}
            INTO AN AUTHORITY
          </h2>
          <p className={styles.text}>
            So you can generate revenue for your agency, coaching offer, course,
            & more
          </p>
        </div>
        <div className={styles.videoWrapper}>
          {" "}
          <div className={styles.playerWrapper}>
            <ReactPlayer
              className={styles.player}
              controls={false}
              muted
              playing
              loop
              url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              width="100%"
              height="100%"
              config={{
                youtube: {
                  playerVars: { showinfo: 0 },
                },
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;

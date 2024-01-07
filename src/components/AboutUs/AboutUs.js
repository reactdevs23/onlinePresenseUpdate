import React from "react";
import styles from "./AboutUs.module.css";
import { aboutUs } from "../../images";
import { Link } from "react-scroll";

const AboutUs = () => {
  return (
    <section className="mainWrapper">
      <div className={styles.wrapper}>
        <img src={aboutUs} className={styles.image} alt="#" />
        <div className={styles.infoContainer}>
          <h2 className={styles.title}>
            ABOUT <span className="highlight">US</span>{" "}
          </h2>
          <p className={styles.info}>
            <span className="highlight">Wiz:</span> I went from owning a
            million-follower Instagram network to building DTC brands, marketing
            agencies, and SaaS to multi 7 figures. I took all this experience
            and decided to build a personal brand on Twitter. 125,000 followers
            and multi-millions later, it was the greatest decision of my life.
            I've been able to help the top personal brands and agency owners
            master the art of becoming an authority and generating leads
            ORGANICALLY. And I am now here to help you.
          </p>{" "}
          <p className={styles.info}>
            <span className="highlight">Aaron:</span> I joined X as a broke
            university student looking to make a quick buck. Soon after I
            learned that I was extremely proficient in brand building. What
            started as a small venture to clear my debt turned into a quarter
            million followers and multiple 6 figures. A broke student turned
            expert brand builder developing authority through the use of
            personal branding.
          </p>{" "}
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={styles.button}
          >
            Signup
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

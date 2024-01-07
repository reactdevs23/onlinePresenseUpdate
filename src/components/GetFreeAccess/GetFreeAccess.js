import React from "react";
import styles from "./GetFreeAccess.module.css";
import { Link } from "react-scroll";
const GetFreeAccess = () => {
  return (
    <section className="mainWrapper">
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          Get <span className="highlight">Free</span> Access...
        </h2>
        <div className={styles.buttonContainer}>
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
          <Link
            to="stillNotConvinced"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className={[styles.button, styles.learnMore].join(" ")}
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetFreeAccess;

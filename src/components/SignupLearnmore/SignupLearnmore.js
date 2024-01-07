import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-scroll";

const SignupLearnmore = () => {
  return (
    <section className="mainWrapper">
      <div className={styles.buttonContainer}>
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className={styles.button}
        >
          Signup
        </Link>
        <Link
          activeClass="active"
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
    </section>
  );
};

export default SignupLearnmore;

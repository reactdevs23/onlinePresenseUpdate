import React from "react";
import { InlineWidget } from "react-calendly";
import styles from "./Calendly.module.css";

const Calendly = () => {
  return (
    <div id="calendly" className={styles.wrapper}>
      <h2 className={styles.title}>
        Book a call, let’s <span className={styles.highlight}>Scale</span>{" "}
      </h2>
      <InlineWidget url="https://calendly.com/dalimkumar604" />
    </div>
  );
};

export default Calendly;

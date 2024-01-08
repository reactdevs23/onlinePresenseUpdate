import React from "react";
import styles from "./BookACall.module.css";
import { Link } from "react-scroll";

const BookACall = () => {
  return (
    <div className={styles.wrapper}>
      <Link
        to="calendly"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className={styles.button}
      >
        Book A Call
      </Link>
    </div>
  );
};

export default BookACall;

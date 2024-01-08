import React from "react";

import {
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
  eighth,
  nineth,
  tenth,
} from "../../images";
import styles from "./TrustedBy.module.css";

const TrustedBy = () => {
  const partners = [
    { logo: first, to: "#" },
    { logo: second, to: "#" },
    { logo: third, to: "#" },
    { logo: fourth, to: "#" },
    { logo: fifth, to: "#" },
    { logo: sixth, to: "#" },
    { logo: seventh, to: "#" },
    { logo: eighth, to: "#" },
    { logo: nineth, to: "#" },
    { logo: tenth, to: "#" },
  ];
  return (
    <section className="mainWrapper">
      <h2 className={styles.title}>
        Trusted By <span className={styles.highlight}> 20+ </span> Brands
      </h2>
      <div className={styles.wrapper}>
        {partners.map((el, i) => (
          <a
            href={el.to}
            target="_blank"
            rel="noreferrer"
            key={i}
            className={[
              styles.partner,
              i < 5 ? styles.topLogo : styles.bottomLogo,
            ].join(" ")}
          >
            <img src={el.logo} alt="#" className={styles.img} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;

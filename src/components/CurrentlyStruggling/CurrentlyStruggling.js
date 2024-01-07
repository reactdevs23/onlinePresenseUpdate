import React from "react";
import styles from "./styles.module.css";
import { card1 } from "../../images";

const CurrentlyStruggling = () => {
  const data = [
    {
      img: card1,
      heading: "Growing Your <span class='highlight'>Account</span>",
      info: "Possibly the biggest struggle when it comes to X. Followers. How do you get them? How do you keep them? Are you getting the right people to follow you?",
    },
    {
      img: card1,
      heading: "Growing Your <span class='highlight'>Account</span>",
      info: "Possibly the biggest struggle when it comes to X. Followers. How do you get them? How do you keep them? Are you getting the right people to follow you?",
    },
    {
      img: card1,
      heading: "Growing Your <span class='highlight'>Account</span>",
      info: "Possibly the biggest struggle when it comes to X. Followers. How do you get them? How do you keep them? Are you getting the right people to follow you?",
    },
  ];
  return (
    <section className="mainWrapper">
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          IF YOU'RE CURRENTLY <br />{" "}
          <span className="highlight">STRUGGLING</span> WITH...
        </h2>{" "}
        <p className={styles.text}>
          The main reason we created this resource page for you is because a ton
          of people struggle with growing, monetizing and establishing authority
          with their accounts. So instead of charging for each video we create,
          we thought why not be for the people and make them all free.
        </p>{" "}
        <div className={styles.cardWrapper}>
          {data.map((el, i) => (
            <div className={styles.card} key={i}>
              <img src={el.img} alt={el.heading} className={styles.image} />
              <h4
                className={styles.heading}
                dangerouslySetInnerHTML={{ __html: el.heading }}
              ></h4>
              <p className={styles.info}>{el.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentlyStruggling;

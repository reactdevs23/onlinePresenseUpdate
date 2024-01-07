import React from "react";
import styles from "./StillNotConvinced.module.css";
import {
  img1,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img2,
  img20,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
} from "../../images";

const StillNotConvinced = () => {
  return (
    <section className="mainWrapper">
      <div className={styles.wrapper} id="stillNotConvinced">
        <h2 className={styles.title}>
          {" "}
          <span className="highlight">STILL</span> NOT CONVINCED?
        </h2>
        <p className={styles.text}>
          Take a look at some of the results we've gotten our clients
        </p>
        <div className={styles.imgWrapper}>
          <div className={styles.imgContainer}>
            <img src={img1} alt="#" className={styles.image} />
            <img src={img2} alt="#" className={styles.image} />
          </div>{" "}
          <img src={img3} alt="#" className={styles.image} />
          <div className={styles.imgContainer}>
            <img src={img4} alt="#" className={styles.image} />
            <img src={img5} alt="#" className={styles.image} />
          </div>{" "}
          <div className={styles.imgContainer}>
            <img src={img6} alt="#" className={styles.image} />
            <img src={img7} alt="#" className={styles.image} />
          </div>{" "}
          <img src={img8} alt="#" className={styles.image} />
          <div className={styles.imgContainer}>
            <img src={img9} alt="#" className={styles.image} />
            <img src={img10} alt="#" className={styles.image} />
          </div>{" "}
          <div className={styles.imgContainer}>
            <img src={img11} alt="#" className={styles.image} />
            <img src={img12} alt="#" className={styles.image} />
          </div>{" "}
          <div className={styles.imgContainer}>
            <img src={img13} alt="#" className={styles.image} />
            <img src={img14} alt="#" className={styles.image} />
          </div>{" "}
          <img src={img15} alt="#" className={styles.image} />{" "}
          <div className={styles.imgContainer}>
            <img src={img16} alt="#" className={styles.image} />
            <img src={img17} alt="#" className={styles.image} />
          </div>{" "}
          <img src={img18} alt="#" className={styles.image} />
          <div className={styles.imgContainer}>
            <img src={img19} alt="#" className={styles.image} />
            <img src={img20} alt="#" className={styles.image} />{" "}
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default StillNotConvinced;

import React from "react";
import styles from "./Portfolio.module.css";

const Portfolio = () => {
  const data = [
    {
      title: "a",
      video:
        "https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F875349277%3Fapp_id%3D122963&dntp=1&display_name=Vimeo&url=https%3A%2F%2Fvimeo.com%2F875349277&image=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1739840662-cd8b830dd5ee5c88eb9ea05bc808bdee5b90a20df8c6ba84a80efea31b4e00e3-d_960&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=vimeo",
    },
    {
      title: "b",
      video:
        "https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F875349277%3Fapp_id%3D122963&dntp=1&display_name=Vimeo&url=https%3A%2F%2Fvimeo.com%2F875349277&image=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1739840662-cd8b830dd5ee5c88eb9ea05bc808bdee5b90a20df8c6ba84a80efea31b4e00e3-d_960&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=vimeo",
    },
    {
      title: "c",
      video:
        "https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F875349277%3Fapp_id%3D122963&dntp=1&display_name=Vimeo&url=https%3A%2F%2Fvimeo.com%2F875349277&image=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1739840662-cd8b830dd5ee5c88eb9ea05bc808bdee5b90a20df8c6ba84a80efea31b4e00e3-d_960&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=vimeo",
    },
    {
      title: "d",
      video:
        "https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F875349277%3Fapp_id%3D122963&dntp=1&display_name=Vimeo&url=https%3A%2F%2Fvimeo.com%2F875349277&image=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1739840662-cd8b830dd5ee5c88eb9ea05bc808bdee5b90a20df8c6ba84a80efea31b4e00e3-d_960&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=vimeo",
    },
    {
      title: "e",
      video:
        "https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F875349277%3Fapp_id%3D122963&dntp=1&display_name=Vimeo&url=https%3A%2F%2Fvimeo.com%2F875349277&image=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1739840662-cd8b830dd5ee5c88eb9ea05bc808bdee5b90a20df8c6ba84a80efea31b4e00e3-d_960&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=vimeo",
    },
    {
      title: "f",
      video:
        "https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F875349277%3Fapp_id%3D122963&dntp=1&display_name=Vimeo&url=https%3A%2F%2Fvimeo.com%2F875349277&image=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1739840662-cd8b830dd5ee5c88eb9ea05bc808bdee5b90a20df8c6ba84a80efea31b4e00e3-d_960&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=vimeo",
    },
    {
      title: "g",
      video:
        "https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F875349277%3Fapp_id%3D122963&dntp=1&display_name=Vimeo&url=https%3A%2F%2Fvimeo.com%2F875349277&image=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1739840662-cd8b830dd5ee5c88eb9ea05bc808bdee5b90a20df8c6ba84a80efea31b4e00e3-d_960&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=vimeo",
    },
    {
      title: "h",
      video:
        "https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F875349277%3Fapp_id%3D122963&dntp=1&display_name=Vimeo&url=https%3A%2F%2Fvimeo.com%2F875349277&image=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1739840662-cd8b830dd5ee5c88eb9ea05bc808bdee5b90a20df8c6ba84a80efea31b4e00e3-d_960&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=vimeo",
    },
  ];

  return (
    <div className={styles.mainWrapper} id="portfolio">
      <div className={styles.textContainer}>
        <p className={styles.text}>Portfolio</p>
        <h2 className={styles.title}>
          Check out our best performing creatives
        </h2>
      </div>
      <div className={[styles.wrapper, "mainWrapper"].join(" ")}>
        {data.map((el, i) => (
          <div
            key={i}
            className={[styles.iframeWrapper, i % 2 === 0 && styles.top].join(
              " "
            )}
          >
            <iframe
              className={styles.video}
              src={el.video}
              scrolling="no"
              allowFullScreen={true}
              title={el.title}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

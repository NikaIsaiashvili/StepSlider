import * as styles from "../Slider/SlideShow.module.css";
import slideData from "../../config/slideData";

import classNames from "classnames";
import { useState, useEffect } from "react";

let cx = classNames.bind(styles);

function SlideShow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  let sliderContainer = cx({
    slide: true,
    current: true,
  });

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === slideData.length - 1 ? 0 : currentSlide + 1
    );
  };
  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? slideData.length - 1 : currentSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(interval);
  });

  return (
    <>
      <div className={styles.slideshow_container}>
        {slideData.map((photo, index) => {
          return (
            <div
              className={index === currentSlide ? sliderContainer : styles.slide}
              key={index + 1}
            >
              {index === currentSlide && (
                <>
                <div className={styles.header_box}>
                  <p className={styles.numb_text}>{`${index + 1} / ${
                    slideData.length
                  }`} </p>
                  <p className={styles.text_info}>{photo.info} </p>
                </div>
                  <img
                    src={photo.url}
                    alt={photo.key}
                    className={styles.slide_img}
                  ></img>
                  <p className={styles.text}>
                    <a
                      href={photo.link}
                      target="_blank"
                      className={styles.text_link}
                    >
                      <span className={styles.link_go_to}>Go to:</span> {photo.name}
                    </a>
                  </p>
                </>
              )}
            </div>
          );
        })}
        <a
          className={styles.prev}
          onClick={() => {
            prevSlide();
          }}
        >
          ❮
        </a>
        <a
          className={styles.next}
          onClick={() => {
            nextSlide();
          }}
        >
          ❯
        </a>
      </div>
    </>
  );
}

export default SlideShow;

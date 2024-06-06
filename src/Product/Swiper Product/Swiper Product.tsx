import React, { useEffect } from "react";
import css from "./Swiper Product.module.scss";
import clsx from "clsx";
type rulesArray = {
  data: Array<any>;
};

const SwiperProduct: React.FC<rulesArray> = (data) => {
  useEffect(() => {
    const swiper = setTimeout(() => {
      const boxFrames = document.querySelector(
        `.${css.swiper__product} .${css.frame}`
      ) as HTMLElement;
      const currentSwiper = document.querySelector(
        `.${css.swiper__product} .${css.length__swiper}  .${css.current}`
      ) as HTMLElement;
      boxFrames.addEventListener("scrollend", () => {
        const boxFrames = document.querySelector(
          `.${css.swiper__product} .${css.frame}`
        ) as HTMLElement;
        const widthFrame: number = Math.floor(boxFrames.clientWidth);
        const lengthBarSwiper: number = Math.floor(boxFrames.scrollLeft);
        console.log(lengthBarSwiper / widthFrame);

        if (widthFrame > lengthBarSwiper) {
          currentSwiper.innerHTML = "1";
        } else {
          currentSwiper.innerHTML = `${
            Math.floor(lengthBarSwiper / widthFrame) + 1
          }`;
        }
      });
    }, 0);
    return () => {
      clearTimeout(swiper);
    };
  }, []);
  const getObjectData = data.data;
  const toObject: {
    arrImg: [];
    events: string;
    priceDeFault: string;
    discount: string;
    sold: string;
  } = Object(getObjectData);

  return (
    <div id="swiper__product" className={clsx(css.swiper__product)}>
      <div className={clsx(css.frame)}>
        {toObject.arrImg.map((item, index) => {
          return (
            <div key={index} className={clsx(css.item)}>
              <img width={"100%"} height={"100%"} src={item} alt="" />
            </div>
          );
        })}
        <div className={clsx(css.events)}>
          <img width={"100%"} height={"100%"} src={toObject.events} alt="" />
        </div>
      </div>
      <div className={clsx(css.length__swiper)}>
        <span className={clsx(css.current)}>1</span>
        <span className={clsx(css.bar)}>/</span>
        <span className={clsx(css.max__length)}>{toObject.arrImg.length}</span>
      </div>
    </div>
  );
};

export default SwiperProduct;

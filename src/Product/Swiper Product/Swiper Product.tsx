import React, { useEffect } from "react";
import css from "./Swiper Product.module.scss";
import css500 from "./Swiper Product 500.module.scss";
import css1000 from "./Swiper Product 1000.module.scss";  
import clsx from "clsx";
import { handle__click__nav__img } from "./handle__click__nav__img";
import { handleWhenScrollMainImgBannerProducts } from "./handle__scroll__swiper";
type rulesArray = {
  data: Array<any>;
};

const SwiperProduct: React.FC<rulesArray> = (data) => {
  const getObjectData = data.data;
  const toObject: {
    arrImg: [];
    events: string;
    priceDeFault: string;
    discount: string;
    sold: string;
  } = Object(getObjectData);

  useEffect(() => {
    const autoSetEventWhenMouse = setTimeout(() => {
      const boxFrames = document.querySelector(
        `.${css.frame}`
      ) as HTMLElement;
      boxFrames.addEventListener("scrollend", () => {
        handleWhenScrollMainImgBannerProducts(css,boxFrames);
      });
    }, 0);

    return () => {
      clearTimeout(autoSetEventWhenMouse);
    };
  }, []);

  return (
    <div
      id="swiper__product"
      className={clsx(css.swiper__product, css500.swiper__product)}
    >
      <div className={clsx(css.layout, css500.layout, "layout")}>
        <div
          className={clsx(
            css.swiper__container__slider,
            css500.swiper__container__slider
          )}
        >
          <div className={clsx(css.frame)}>
            {toObject.arrImg.map((item, index) => {
              return (
                <div key={index} data-index= {index} className={clsx(css.item)}>
                  <img width={"100%"} height={"100%"} src={item} alt="" />
                </div>
              );
            })}
            <div className={clsx(css.events)}>
              <img
                width={"100%"}
                height={"100%"}
                src={toObject.events}
                alt=""
              />
            </div>
          </div>
          <div className={clsx(css.length__swiper)}>
            <span className={clsx(css.current)}>1</span>
            <span className={clsx(css.bar)}>/</span>
            <span className={clsx(css.max__length)}>
              {toObject.arrImg.length}
            </span>
          </div>
        </div>
        <div className={clsx(css.nav__img,css500.nav__img)}>
          <div className={css500.nav__frame}>
            {toObject.arrImg.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    handle__click__nav__img(index, css);
                  }}
                  className={clsx(css500.items__img)}
                >
                  <img width={"100%"} height={"100%"} src={item} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwiperProduct;

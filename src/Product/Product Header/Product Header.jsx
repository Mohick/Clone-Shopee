import clsx from "clsx";
import { Icons } from "../../Container  Component  SVG ICON/Manage Icon";
import Shopping from "../../Header/Shopping/Shopping";
import css from "./Product Header.module.scss";
import { useEffect } from "react";

const ProductHeaderMobi = function ({ name }) {
  useEffect(() => {
    const boxHeader = document.querySelector(`.${css.product__header}`);
    const nameProduct = document.querySelector(`.${css.name__product}`);
    function hanleWhenUserScrollBrowser() {
      const headDocument = document
        .querySelector("body")
        .getBoundingClientRect().top;
      const heightScreens = window.innerHeight;
      const sliceScreenBrowser = heightScreens / 2;
      const valueOpacity = (
        Math.abs(headDocument) / sliceScreenBrowser
      ).toFixed(1);
      if (valueOpacity < 1) {
        boxHeader.style.background = `rgba(255, 255, 255, ${valueOpacity})`;
        nameProduct.style.opacity = `${valueOpacity}`;
        boxHeader.style.boxShadow = `inset 0 0 0.1rem rgba(0, 0, 0, 0)`;
      } else {
        boxHeader.style.background = `rgba(255, 255, 255, 1)`;
        boxHeader.style.boxShadow = `inset 0 0 0.1rem rgba(0, 0, 0, 0.5)`;
        nameProduct.style.opacity = `1`;
      }
    }
    window.addEventListener("scroll", hanleWhenUserScrollBrowser);
    return () => {
      window.removeEventListener("scroll", hanleWhenUserScrollBrowser);
    };
  }, []);
  return (
    <div className={css.product__header}>
      <div className={clsx(css.layout, "layout")}>
        <div className={clsx(css.btn__back__page)}>
          <Icons.arrowLeftHaveTail className={clsx(css.icon)} />
        </div>
        <div className={clsx(css.name__product)}>{name}</div>
        <div className={clsx(css.btn__shopping)}>
          <Shopping className={clsx(css.icon)} />
        </div>
        <div className={clsx(css.btn__mores)}>
          <Icons.menuThreeDots className={clsx(css.icon)} />
        </div>
      </div>
    </div>
  );
};

export default ProductHeaderMobi;

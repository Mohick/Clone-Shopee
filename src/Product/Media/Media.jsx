import clsx from "clsx";
import css from "./Media.module.scss";
const MediaProducts = () => {
  return (
    <div className={css.media__products}>
      <div className={clsx(css.layout, "layout")}>
        <div className={clsx(css.box__items,css.bg__fb)}>
          <img
            className={css.img__logo}
            src="./Media Products/fb.png"
            alt="./Media Products"
          />
          <span className={clsx(css.name__logo)}>
            Share
          </span>
        </div>
        <div className={clsx(css.box__items)}>
          <img
            className={css.img__logo}
            src="./Media Products/tw.png"
            alt="./Media Products"
          />
          <span className={clsx(css.name__logo,css.color__name__tw)}>
            twitter
          </span>
        </div>
        <div className={clsx(css.box__items)}>
          <img
            className={css.img__logo}
            src="./Media Products/prinit.png"
            alt="./Media Products"
          />
          <span className={clsx(css.name__logo,css.color__name__prinIt)}>
          prinit
          </span>
        </div>
      </div>
    </div>
  );
};

export default MediaProducts;

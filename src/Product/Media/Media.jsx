import clsx from "clsx";
import css from "./Media.module.scss";
import css600 from "./media_600.module.scss";
import css1000 from "./media__1000.module.scss";
const MediaProducts = () => {
  return (
    <div
      className={clsx(
        css.media__products,
        css600.media__products,
        css1000.media__products
      )}
    >
      <div className={clsx(css.layout, css600.layout, "layout")}>
        <div className={clsx(css.box__items, css.bg__fb)}>
          <img
            className={css.img__logo}
            src="./Media Products/fb.png"
            alt="./Media Products"
          />
          <span className={clsx(css.name__logo)}>Share</span>
        </div>
        <div className={clsx(css.box__items)}>
          <img
            className={css.img__logo}
            src="./Media Products/tw.png"
            alt="./Media Products"
          />
          <span className={clsx(css.name__logo, css.color__name__tw)}>
            twitter
          </span>
        </div>
        <div className={clsx(css.box__items)}>
          <img
            className={css.img__logo}
            src="./Media Products/prinit.png"
            alt="./Media Products"
          />
          <span className={clsx(css.name__logo, css.color__name__prinIt)}>
            prinit
          </span>
        </div>
      </div>
    </div>
  );
};

export default MediaProducts;

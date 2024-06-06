import React from "react";
import css from "./Vote Products.module.scss";
import clsx from "clsx";
import VoteLikeProduct from "./Like/Vote Like Product";

type props = { star: string | number; sold: string };

const VoteProducts: React.FC<props> = (data: {
  star: string | number;
  sold: string;
}) => {
  return (
    <div className={css.vote}>
      <div className={css.rating}>
        <div className={css.star}>
          <img
            className={clsx(css.icon__svg)}
            src="./Star/full_star.svg"
            alt=""
          />
          <img
            className={clsx(css.icon__svg)}
            src="./Star/full_star.svg"
            alt=""
          />
          <img
            className={clsx(css.icon__svg)}
            src="./Star/full_star.svg"
            alt=""
          />
          <img
            className={clsx(css.icon__svg)}
            src="./Star/full_star.svg"
            alt=""
          />
          <img
            className={clsx(css.icon__svg)}
            src="./Star/full_star.svg"
            alt=""
          />
          <span className={css.number__star}>{data.star}</span>
        </div>
        <div className={clsx(css.bar)}>|</div>
        <div className={clsx(css.sold)}>{data.sold} sold</div>
      </div>
      <div className={clsx(css.btn__like)}>
        <VoteLikeProduct classCustomEmptyHeart={css.icon__empty__heart} classCustomFullHeart= {css.icon__heart} />
      </div>
    </div>
  );
};

export default VoteProducts;

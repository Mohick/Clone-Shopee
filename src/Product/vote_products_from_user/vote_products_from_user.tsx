import React from "react";
import css from "./vote_products_from_user.module.scss";
import css1000 from "./vote_products_from_user_1000.module.scss";
import clsx from "clsx";
import ModalReport from "./modal_report/modal_report";
import handleOpenAndCloseModal from "./modal_report/handle_modal";
type props = {
  star: number | string;
  rating: number | string;
  sold: number | string;
};
const VoteProductsFromUser: React.FC<props> = (props: props) => {
  return (
    <div
      className={clsx(
        css.vote_products_from_user,
        css1000.vote_products_from_user
      )}
    >
      <div className={css1000.info__vote__product}>
        <div className={css1000.vote__star__product}>
          <span className={css1000.vote__number__star}>{props.star}</span>
          <img
            className={css1000.vote__img__star}
            src="./Star/full_star.svg"
            alt=""
          />
          <img
            className={css1000.vote__img__star}
            src="./Star/full_star.svg"
            alt=""
          />
          <img
            className={css1000.vote__img__star}
            src="./Star/full_star.svg"
            alt=""
          />
          <img
            className={css1000.vote__img__star}
            src="./Star/full_star.svg"
            alt=""
          />
          <img
            className={css1000.vote__img__star}
            src="./Star/full_star.svg"
            alt=""
          />
        </div>
        <div className={css1000.vote__text__rating}>
          <span className={css1000.vote__number__rating}>{props.rating}</span>
          Ratings
        </div>
        <div className={css1000.vote__text__sold}>
          <span className={css1000.vote__number__sold}>{props.sold}</span> sold
        </div>
      </div>
      <div className={css1000.report__product} onClick={()=>{
        handleOpenAndCloseModal("open")
      }}>
        <div className={css1000.btn__report__product}>Report</div>
      </div>
      <ModalReport />
    </div>
  );
};

export default VoteProductsFromUser;

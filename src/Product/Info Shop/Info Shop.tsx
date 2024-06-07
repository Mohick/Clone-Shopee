import clsx from "clsx";
import React from "react";
import css from "./Info Shop.module.scss";

type props = {
  nameShop: string;
  imgShop: string;
  localtionsShop: string;
  productShop: string | number;
  voteStar: string | number;
  responsiveShop: string | number;
  voucherShop: string[];
};

const InfoShop: React.FC<props> = (data: props) => {
  console.log(data);

  return (
    <div className={clsx(css.info__shop)}>
      <div className={clsx(css.layout, "layout")}>
        <div className={clsx(css.info__header)}>
          <div className={clsx(css.logo__shop)}>
            <img className={clsx(css.img__logo)} src={data.imgShop} alt="" />
            <div className={css.preferred}>Preferred+</div>
          </div>
          <div className={css.info__text}>
            <div className={css.name__shop}>{data.nameShop}</div>
            <div className={css.time__shop__online}>Active 10 hours ago</div>
            <div className={css.localtionsShop}>{data.localtionsShop}</div>
          </div>
          <div className={css.btn__more}>
            <div className={css.text__btn}>View Shop</div>
          </div>
        </div>
        <div className={clsx(css.info__body)}>
          <div className={clsx(css.items)}> 
            <span className={css.paramanter}>{data.productShop}</span> Products
          </div>
          <div className={clsx(css.items)}> 
            <span className={css.paramanter}>{data.productShop}</span> Rating
          </div>
          <div className={clsx(css.items)}> 
            <span className={css.paramanter}>{data.responsiveShop}</span> Chat Response
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default InfoShop;

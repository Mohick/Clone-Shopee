import clsx from "clsx";
import React from "react";
import css from "./Info Shop.module.scss";
import { Icons } from "../../Container  Component  SVG ICON/Manage Icon";

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
            <span className={css.paramanter}>{data.responsiveShop}</span> Chat
            Response
          </div>
        </div>
        <div className={css.footer}>
          {data.voucherShop.map((item, index) => {
            return (
              <div className={clsx(css.voucher)} key={index}>
                <div className={css.value__voucher}>
                  <div className={clsx(css.price)}>₫{item} off</div>
                  <div className={clsx(css.max__value)}>Min. Spend ₫50k</div>
                  <div className={clsx(css.out__of__date)}>
                    Valid Until: 03.08.2024
                  </div>
                  <div className={clsx(css.border__voucher)}></div>
                </div>
                <div className={css.btn__apply__voucher}>
                  <div className={css.text__btn}>use</div>
                </div>
              </div>
            );
          })}
          <div className={clsx(css.items__views)}>
            <div className={clsx(css.btn__show__more)}>
              <Icons.arrowLeftHaveBorder className={clsx(css.icon)} />
              <div className={css.text__btn}>See More</div>
            </div>
          </div>
        </div>
        <div className={clsx(css.info__description)}>
          * Applicable to all products in this shop (excl. shipping fees)
        </div>
      </div>
    </div>
  );
};

export default InfoShop;
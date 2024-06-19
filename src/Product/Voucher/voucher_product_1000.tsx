import React from "react";
import css from "./Voucher Product.module.scss"
import css1000 from "./voucher_product_1000.module.scss";
import clsx from "clsx";
type Props = {
  voucher: string[];
  urlImgShop: string;
};

const VoucherProduct1000: React.FC<Props> = (props: Props) => {
  const sliceArrayToThree = props.voucher.slice(0, 3) as string[];
  const years = Number(new Date().getFullYear()) + 1;
  return (
    <div className={clsx(css.voucher__product__1000,css1000.voucher__product__1000)}>
      <div className={css1000.layout}>
        <div className={css1000.header}>
          <div className={css1000.header__title}>Shop Vouchers</div>
        </div>
        <div className={css1000.body}>
          <div className={css1000.body__selections}>
            {sliceArrayToThree.map((item, index) => {
              return (
                <div className={css1000.body__options} key={index}>
                  {item} Off
                </div>
              );
            })}
          </div>
        </div>
        <div className={css1000.dropdown}>
          <div className={css1000.dropdown__header}>
            <div className={css1000.header__title}>Shop Vouchers</div>
            <div className={css1000.header__description}>
              Save more by applying these Shop Vouchers to the items in your
              shopping cart.
            </div>
          </div>
          <div className={css1000.body}>
            {props.voucher.map((item, index) => {
              return (
                <div key={index} className={css1000.body__items}>
                  <div className={css1000.items__img}>
                    <img width={"100%"} height={"100%"} src={props.urlImgShop} alt="" />
                  </div>
                  <div className={css1000.items__info}>
                    <div className={css1000.info__voucher}>{item}</div>
                    <div className={css1000.info__rule}>Min. Spend ₫300k</div>
                    <div className={css1000.info__date}>Valid Till: 23.08.{years}</div>
                  </div>
                  <div className={css1000.items__btn__get}>
                    <div className={css1000.btn__get}>use</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoucherProduct1000;

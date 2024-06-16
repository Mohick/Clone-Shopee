import React, { useEffect } from "react";
import css from "./Price Product.module.scss";
import css600 from "./price_product_600.module.scss";
import css1000 from "./price_product_1000.module.scss"
import clsx from "clsx";
type props = {
  price: string | number;
  discount: string | number;
  classCustome: string;
};

const PriceProduct: React.FC<props> = (props: props) => {
  return (
    <div className={clsx(css.price__product, css600.price__product,css1000.price__product)}>
      <div className={clsx(css.layout, css600.layout,css1000.layout, "layout")}>
        <div
          className={clsx(
            !!props.classCustome ? props.classCustome : (css.price,css1000.price)
          )}
        >
          <span className={css1000.price__default}>₫ {props.price}</span>
          <span className={css1000.price__discount}> ₫ {props.discount}</span>
          <span className={css1000.price__percent}>{Math.ceil((100 - (Number(props.discount) / Number(props.price)) * 100))}% </span>
        </div>
      </div>
    </div>
  );
};

export default PriceProduct;

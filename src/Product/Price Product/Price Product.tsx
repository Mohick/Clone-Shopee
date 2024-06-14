import React, { useEffect } from "react";
import css from "./Price Product.module.scss";
import css600 from "./price_product_600.module.scss"
import clsx from "clsx";
type props = {
  price: string;
  classCustome: string;
};

const PriceProduct: React.FC<props> = (props: {
  price: string;
  classCustome: string;
}) => {
  return (
    <div className={clsx(css.price__product,css600.price__product)}>
      <div className={clsx(css.layout,css600.layout,"layout")}>
        <div
          className={clsx(
            !!props.classCustome ? props.classCustome : css.price
          )}
        >
          ₫ {props.price}
        </div>
      </div>
    </div>
  );
};

export default PriceProduct;

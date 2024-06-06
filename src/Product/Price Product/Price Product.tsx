import React, { useEffect } from "react";
import css from "./Price Product.module.scss";
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
    <div
      className={clsx(!!props.classCustome ? props.classCustome : css.price)}
    >
      ₫ {props.price}  
    </div>
  );
};

export default PriceProduct;

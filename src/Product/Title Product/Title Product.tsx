import React, { useEffect } from "react";
import css from "./Title Product.module.scss";
import css600 from "./Title_Product_600.module.scss"
import clsx from "clsx";
type props = {
  name: string;
  classCustome: string;
};

const TitleProduct: React.FC<props> = (props: {
  name: string;
  classCustome: string;
}) => {
  return (
    <div className={clsx(css.product__title,css600.product__title)}>
      <div className={clsx(css.layout,css600.layout,"layout")}>
        <div
          className={clsx(
            !!props.classCustome ? props.classCustome : css.title,
          )}
        >
          {props.name}
        </div>
      </div>
    </div>
  );
};

export default TitleProduct;

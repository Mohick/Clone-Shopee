import React, { useEffect } from "react";
import css from "./Title Product.module.scss";
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
    <div
      className={clsx(!!props.classCustome ? props.classCustome : css.title)}
    >
      {props.name}  
    </div>
  );
};

export default TitleProduct;

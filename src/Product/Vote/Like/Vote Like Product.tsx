import React, { useState } from "react";
import { useLocation } from "react-router";
import css from "./Vote Like Product.module.scss";
import { Icons } from "../../../Container  Component  SVG ICON/Manage Icon";
import clsx from "clsx";
type props = {
  classCustomEmptyHeart: string;
  classCustomFullHeart: string;
};

const VoteLikeProduct: React.FC<props> = (data: props) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Icons.emptyHeart
        className={clsx(data.classCustomEmptyHeart, show ? css.hiddent : undefined)}
        onClick={()=>{
            setShow(true)
        }}
      />
      <Icons.heart
        className={clsx(data.classCustomFullHeart, show ? undefined : css.hiddent)}
        onClick={()=>{
            setShow(false)
        }}
      />
    </>
  );
};

export default VoteLikeProduct;

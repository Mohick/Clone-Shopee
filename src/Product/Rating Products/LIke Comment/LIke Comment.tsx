import React, { useState } from "react";

import css from "./LIke Comment.module.scss";
import { Icons } from "../../../Container  Component  SVG ICON/Manage Icon";
import clsx from "clsx";
type props = {
  classCustomLikeNoColor: string;
  classCustomLikeHaveColor: string;
  classCustomText: string;
  numberVotesComment: string | number;
};

const LikeComment: React.FC<props> = (data: props) => {
  const [show, setShow] = useState({
    like : Number(data.numberVotesComment),
    show : false
  });
 
    
  return (
    <>
      <Icons.likeNoColorComment
        className={clsx(data.classCustomLikeNoColor, show.show ? css.hiddent : undefined)}
        onClick={()=>{
            setShow({
               like : show.like + 1,
               show : true
            })
           
        }}
      />
      <Icons.likeHaveColorComponent
        className={clsx(data.classCustomLikeHaveColor, show.show ? undefined : css.hiddent)}
        onClick={()=>{
            setShow({
               like : show.like - 1,
               show : false
            })
           
        }}
      />
        <div className={clsx(data.classCustomText, show.show ? css.apply__color : undefined)}>Helpful({show.like})</div>
    </>
  );
};

export default LikeComment;

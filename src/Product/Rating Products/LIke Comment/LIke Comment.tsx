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
  const [show, setShow] = useState(false);
  const [changesLIke, setChangesLIke] = useState(Number(data.numberVotesComment));
    console.log(show);
    
  return (
    <>
      <Icons.likeNoColorComment
        className={clsx(data.classCustomLikeNoColor, show ? css.hiddent : undefined)}
        onClick={()=>{
            setShow(true)
            setChangesLIke(()=>{
                return changesLIke + 1
            })
        }}
      />
      <Icons.likeHaveColorComponent
        className={clsx(data.classCustomLikeHaveColor, show ? undefined : css.hiddent)}
        onClick={()=>{
            setShow(false)
            setChangesLIke(()=>{
                return changesLIke - 1
            })
        }}
      />
        <div className={clsx(data.classCustomText, show ? css.apply__color : undefined)}>Helpful({changesLIke})</div>
    </>
  );
};

export default LikeComment;

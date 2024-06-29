import React, { memo, useEffect, useState } from "react";
import css from "./Shopping.module.scss";
import { getCookie } from 'typescript-cookie';
import { Icons } from "../../Container  Component  SVG ICON/Manage Icon";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

type rulesSVG = React.SVGAttributes<SVGElement>;

const Shopping: React.FC<rulesSVG> = function (props) {
  const [lengthCart, setLengthCart] = useState(getCookie('lengthCart'));
  const [cookies] = useCookies()

  useEffect(() => {
    setLengthCart(getCookie('lengthCart'))
  }, [cookies]);;
  
  return (
    <Link to={"/cart"} className={css.shopping}>
      {lengthCart && (
        <div className={css.shopping__length__cart}>
          {lengthCart}
        </div>
      )}
      <Icons.shopping {...props} />
    </Link>
  );
};

export default memo(Shopping);

import React, { useEffect, useState } from "react";
import css from "./Shopping.module.scss";
import { getCookie } from 'typescript-cookie';
import { Icons } from "../../Container  Component  SVG ICON/Manage Icon";
import { Link } from "react-router-dom";

type rulesSVG = React.SVGAttributes<SVGElement>;

const Shopping: React.FC<rulesSVG> = function (props) {
  const [lengthCart, setLengthCart] = useState(getCookie('lengthCart'));

  useEffect(() => {
    
  }, []);

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

export default Shopping;

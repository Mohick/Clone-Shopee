import clsx from "clsx";
import css1000 from "./btn__buy__products__1000.module.scss";
import { Icons } from "../../Container  Component  SVG ICON/Manage Icon";

const BtnBuyProducts1000 = () => {
  return (
    <div className={clsx(css1000.btn__buy__products__1000)}>
      <div className={clsx(css1000.box__btn__buy__product)}>
        <div className={clsx(css1000.box__btn__cart)}>
          <Icons.shoppingPlus className={clsx(css1000.icon__btn__cart)} />
          <div className={clsx(css1000.title__btn__cart)}>add to cart</div>
        </div>
        <div className={clsx(css1000.box__btn__buy)}>
          <div className={clsx(css1000.title__btn__buy)}>buy now</div>
        </div>
      </div>
    </div>
  );
};

export default BtnBuyProducts1000;

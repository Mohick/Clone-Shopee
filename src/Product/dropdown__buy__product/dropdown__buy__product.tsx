import React from "react";
import css from "./dropdown__buy__product.module.scss";
import css1000 from "./dropdown__buy__product_1000.module.scss";
import clsx from "clsx";
import { Icons } from "../../Container  Component  SVG ICON/Manage Icon";
import { handleTakeProductToCart } from "./handle__take__product__to__cart/handle__take__product__to__cart";
type Props = {
  nameProducts: string
};

const DropdownBuyProduct:React.FC<Props> = (props:Props,id:number | string) => {
  return (
    <div
      className={clsx(
        css.dropdown__buy__product,
        css1000.dropdown__buy__product
      )}
    >
      <div className={css.box__selection}>
        <div className={css.box__options}>
          <Icons.chat className={css.options__icon} />
          <div className={css.options__text}>Chat Now</div>
        </div>
        <div className={css.box__options} onClick={()=>{
          handleTakeProductToCart(props.nameProducts,id)
        }}>
          <Icons.shoppingPlus className={css.options__icon} />
          <div className={css.options__text}>add to cart</div>
        </div>
      </div>
      <div className={css.box__btn__buy}> 
        <div className={css.btn__buy}>buy now</div>
      </div>
    </div>
  );
};

export default DropdownBuyProduct;

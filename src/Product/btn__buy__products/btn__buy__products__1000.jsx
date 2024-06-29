import clsx from "clsx";
import css from "./btn__buy__products.module.scss";
import css1000 from "./btn__buy__products__1000.module.scss";
import { Icons } from "../../Container  Component  SVG ICON/Manage Icon";
import { handleTakeProductToCart } from "../dropdown__buy__product/handle__take__product__to__cart/handle__take__product__to__cart";
import { Link } from "react-router-dom";

const BtnBuyProducts1000 = ({ nameProduct, id }) => {
  return (
    <div
      className={clsx(
        css.btn__buy__products__1000,
        css1000.btn__buy__products__1000
      )}
    >
      <div className={clsx(css1000.box__btn__buy__product)}>
        <div
          className={clsx(css1000.box__btn__cart)}
          onClick={() => {
            handleTakeProductToCart(nameProduct, id);
          }}
        >
          <Icons.shoppingPlus className={clsx(css1000.icon__btn__cart)} />
          <div className={clsx(css1000.title__btn__cart)}>add to cart</div>
        </div>
        <Link
          to={"/cart"}
          onClick={() => {
            handleTakeProductToCart(nameProduct, id);
          }}
          className={clsx(css1000.box__btn__buy)}
        >
          <div className={clsx(css1000.title__btn__buy)}>buy now</div>
        </Link>
      </div>
    </div>
  );
};

export default BtnBuyProducts1000;

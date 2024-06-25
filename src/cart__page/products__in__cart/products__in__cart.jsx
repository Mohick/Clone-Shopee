import clsx from "clsx";
import css from "./products__in__cart.module.scss";
import css1000 from "./products__in__cart__1000.module.scss";
import RenderItemsIncart from "../render__items__buy/render__items__buy";
import { check__all__items__input } from "../handle_dom_cart/handle_dom_cart";
const ProductsInCart = ({items}) => {

  return (
    <div className={clsx(css.products__in_cart, css1000.products__in_cart)}>
      <div className={clsx("layout", css.products__in_cart__layout,css1000.products__in_cart__layout)}>
        <div className={clsx(css.products__in_cart__header,css1000.products__in_cart__header)}>
          <div className={clsx(css1000.header__product)}>
            <input
              className={clsx(css1000.header__product__check)}
              type="checkbox"
              onClick={(e)=>{
                check__all__items__input(e.target)
              }}
            />
            <div className={clsx(css1000.header__product__name)}>Product</div>
          </div>
          <div className={css1000.box__header__info}>
            <div className={css1000.header__info__items}>Unit Price</div>
            <div className={css1000.header__info__items}>Quantity</div>
            <div className={css1000.header__info__items}>Total Price</div>
            <div className={css1000.header__info__items}>Actions</div>
          </div>
        </div>
        <div className={css1000.products__in_cart__body}>
         {items.map((data,index)=>{
          return  <RenderItemsIncart key={index} data={data}/>
         })}
        </div>
        
      </div>
    </div>
  );
};

export default ProductsInCart;

import clsx from "clsx";
import { useEffect, useState } from "react";
import css from "./products__in__cart.module.scss";
import css1000 from "./products__in__cart__1000.module.scss";
import { getCookie } from "typescript-cookie";
import axios from "axios";
import RenderItemsIncart from "../render__items__buy/render__items__buy";
const ProductsInCart = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const startProduct = setTimeout(async () => {
      
      await axios.get("http://localhost:3000/api__search").then((result) => {
        const data = result.data;
        const resFilter = data.filter((item) => {
          return getCookie(item.name);
        });
        setItems(resFilter);
      }, 0);
    });
    return () => {
      clearTimeout(startProduct);
    };
  }, []);
  return (
    <div className={clsx(css.products__in_cart, css1000.products__in_cart)}>
      <div className={clsx("layout", css.products__in_cart__layout,css1000.products__in_cart__layout)}>
        <div className={clsx(css.products__in_cart__header,css1000.products__in_cart__header)}>
          <div className={clsx(css1000.header__product)}>
            <input
              className={clsx(css1000.header__product__check)}
              type="checkbox"
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

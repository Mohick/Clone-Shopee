import { useEffect, useState } from "react";
import FooterCart from "./Footer/footer";
import HeaderCartThan1000 from "./Header/header__cart__than__1000";
import HeaderCartPageUnder1000 from "./Header/header__cart__under__1000";
import YouAlsoLike from "./also__like/also__like";
import ProductsInCart from "./products__in__cart/products__in__cart";
import axios from "axios";
import { getCookie } from "typescript-cookie";

const CartPage = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const startProduct = setTimeout(async () => {
      
      await axios.get("http://localhost:3000/filter__cart").then((result) => {
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
  if(items.length == 0) return ;
  return (
    <>
      <HeaderCartPageUnder1000/>
      <HeaderCartThan1000/>
      <ProductsInCart items={items}/>
      <FooterCart items={items[0]}/>
      <YouAlsoLike/>
    </>
  );
};

export default CartPage;

import { lazy, useEffect, useState } from "react";

const FooterCart = lazy(() => import("./Footer/footer"));
const HeaderCartThan1000 = lazy(() =>
  import("./Header/header__cart__than__1000")
);
const HeaderCartPageUnder1000 = lazy(() =>
  import("./Header/header__cart__under__1000")
);
const YouAlsoLike = lazy(() => import("./also__like/also__like"));
const ProductsInCart = lazy(() =>
  import("./products__in__cart/products__in__cart")
);
const Emptycart = lazy(() => import("./empty__cart/empty__cart"));
import axios from "axios";
import { getCookie, getCookies } from "typescript-cookie";
import { useCookies } from "react-cookie";
import EndLoadingPage from "../Loading/end__loading";
import LoadingPage from "../Loading/loading__page";
const CartPage = () => {
  const [items, setItems] = useState([]);
  const [cookies] = useCookies();
  useEffect(() => {
    let allow = true;
    const startProduct = setTimeout(async () => {
      if (allow) {
        await axios
          .get("http://localhost:3000/filter__cart")
          .then((result) => {
            const data = result.data;
            const resFilter = data.filter((item) => {
              return getCookie(item.name);
            });
            if (resFilter.length > 0) {
              setItems(resFilter);
            } else {
              setItems({
                error: true,
              });
            }
            
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }, 0);
    return () => {
      clearTimeout(startProduct);
      allow = false;
    };
  }, [cookies]);
  if (items.length == 0) return <LoadingPage/>;
  return (
    <>
      <EndLoadingPage />
      <HeaderCartPageUnder1000 />
      <HeaderCartThan1000 />
      {items.error ? (
        <Emptycart />
      ) : (
        <>
          <ProductsInCart items={items} />
          <FooterCart items={items[0]} />
        </>
      )}
      <YouAlsoLike />
    </>
  );
};

export default CartPage;

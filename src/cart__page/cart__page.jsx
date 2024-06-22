import FooterCart from "./Footer/footer";
import HeaderCartThan1000 from "./Header/header__cart__than__1000";
import HeaderCartPageUnder1000 from "./Header/header__cart__under__1000";
import YouAlsoLike from "./also__like/also__like";
import ProductsInCart from "./products__in__cart/products__in__cart";

const CartPage = () => {
  return (
    <>
      <HeaderCartPageUnder1000/>
      <HeaderCartThan1000/>
      <ProductsInCart/>
      <FooterCart/>
      <YouAlsoLike/>
    </>
  );
};

export default CartPage;

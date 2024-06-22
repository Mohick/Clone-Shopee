import clsx from "clsx";
import css from "./header__cart.module.scss";
import css1000 from "./header__cart__1000.module.scss";
import HeaderInfoShopee from "../../Header/Header PC/header__info";
import { Icons } from "../../Container  Component  SVG ICON/Manage Icon";
const HeaderCartThan1000 = () => {
  return (
    <>
      <div className={clsx(css.header__cart__than__1000,css1000.header__cart__than__1000)}>
      <HeaderInfoShopee />
        <div
          className={clsx(css1000.header__cart__than__1000__layout, "layout")}
        >
          <div className={css1000.header}>
            <div className={css1000.box__logo__name__page}>
              <div className={css1000.header__box__icons__logo}>
                <Icons.logoShopee className={css1000.header__icons__logo} />
              </div>
              <div className={css1000.header__box__name__page}>
                <div className={css1000.header__name__page}>Shopping Cart</div>
              </div>
            </div>
            <div className={css1000.box__search__voucher}>
              <div className={css1000.box__input__search}>
                <input className={css1000.input__search} placeholder="VOUCHER ĐẾN 150.000 ĐỒNG" type="text" name="" id="" />
              </div>
              <div className={css1000.box__btn__find}>
                <Icons.find className={css1000.icon__find}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderCartThan1000;

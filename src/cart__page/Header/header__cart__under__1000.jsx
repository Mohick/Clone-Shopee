import clsx from "clsx";
import css from "./header__cart.module.scss";
import css600 from "./header__cart__600.module.scss";
import css1000 from "./header__cart__1000.module.scss";
import { Icons } from "../../Container  Component  SVG ICON/Manage Icon";
import { Link } from "react-router-dom";
const HeaderCartPageUnder1000 = () => {
  return (
    <div
      className={clsx(
        css.header__cart__page,
        css600.header__cart__page,
        css1000.header__cart__page
      )}
    >
      <div className={clsx(css.cart__layout, css600.layout, "layout")}>
        <Link to={'/'}>
          <Icons.arrowLeftHaveTail className={css.header__icon__arrow} />
        </Link>
        <div className={css.header__title}>Shop Cart</div>
        <div className={css.header__btn__edit}>edit</div>
      </div>
    </div>
  );
};
export default HeaderCartPageUnder1000;

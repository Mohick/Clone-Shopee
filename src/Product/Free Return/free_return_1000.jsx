import clsx from "clsx";
import css from "./Free Return.module.scss"
import css1000 from "./free_return_1000.module.scss";
import { Icons } from "../../Container  Component  SVG ICON/Manage Icon";

const FreeReturnProduct1000 = () => {
  return (
    <div className={clsx(css.free__return___product__1000,css1000.free__return___product__1000)}>
      <div className={css1000.layout}>
        <div className={css1000.header}>
          <div className={css1000.header__title}>Return</div>
        </div>
        <div className={css1000.body}>
          <div className={css1000.body__box__items}>
            <div className={css1000.body__items__icons}>
              <Icons.freeReturn className={css1000.icons} />
            </div>
            <div className={css1000.body__items__title}>15 Days Return</div>
          </div>
          <div className={css1000.body__box__items}>
            <div className={css1000.body__items__title}>Change Of Mind</div>
            <div className={css1000.body__items__icons}>
              <Icons.request className={css1000.icons} />
              <div className={css1000.dropdown}>
                Enjoy our 15-day Free Return for Change of Mind (returned items
                must remain sealed, with tags, and in original packaging),
                applicable to select items. Additionally, upon receipt of the
                order, you have the option to co-check it and benefit from Free
                Return. <a href="" style={{color:"blue"}}>Click here</a> for more information.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeReturnProduct1000;

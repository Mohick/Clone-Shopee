import clsx from "clsx";
import css from "./Free Ship.module.scss";

import css1000 from "./free_ship_1000.module.scss";
import { Icons } from "../../Container  Component  SVG ICON/Manage Icon";

const FreeShip1000 = () => {
  return (
    <div
      className={clsx(
        css.free__ship___product__1000,
        css1000.free__ship___product__1000
      )}
    >
      <div className={css1000.layout}>
        <div className={css1000.header}>
          <div className={css1000.header__title}>Shipping</div>
        </div>
        <div className={css1000.body}>
          <div className={css1000.body__box__items}>
            <div className={css1000.body__box__icons__title}>
              <div className={css1000.body__box__icons}>
                <Icons.freeShip />
              </div>
              <div className={css1000.body__items__title}>Free shipping</div>
            </div>
          </div>
          <div className={css1000.body__box__items}>
            <div className={css1000.body__box__icons__title}>
              <div className={css1000.body__box__icons}>
                <Icons.car />
              </div>
              <div className={css1000.body__items__title}>Shipping Free</div>
            </div>
            <div className={css1000.body__box__description__icon}>
              <div className={css1000.body__description}>Xã Long Thuận, Huyện Hồng Ngự</div>
              <Icons.arrowAngleDown className={css1000.body__icon} />
            </div>
          </div>
          <div className={css1000.body__box__items}>
            <div className={css1000.body__box__icons__title}>
              <div className={css1000.body__box__icons}></div>
              <div className={css1000.body__items__title}>Shipping Free</div>
            </div>
            <div className={css1000.body__box__description__icon}> 
              <div className={css1000.body__description}>₫0</div>
              <Icons.arrowAngleDown className={css1000.body__icon}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeShip1000;

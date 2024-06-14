import clsx from "clsx";
import { Icons } from "../../Container  Component  SVG ICON/Manage Icon";
import css from './Free Ship.module.scss'
import css600 from "./free_ship_600.module.scss"
const FreeShipProducts = () => {
  return (
    <div className={clsx(css.free__ship__products,css600.free__ship__products)}>
      <div className={clsx(css.layout,css600.layout,"layout")}>
        <div className={clsx(css.item)}>
          <Icons.freeShip className={clsx(css.icon)} />
          <span className={clsx(css.text)}>Free shipping</span>
        </div>
        <div className={clsx(css.item)}>
          <Icons.car className={clsx(css.icon)} />
          <span className={clsx(css.text)}>
            Shipping Free:
            <span className={clsx(css.price)}>₫0</span>
            <Icons.arrowAngleDown className={clsx(css.icon)}/>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FreeShipProducts;

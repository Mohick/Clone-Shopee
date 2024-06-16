import { Icons } from "../../Container  Component  SVG ICON/Manage Icon";
import css1000 from "./quantity_1000.module.scss";
const QuantityProduct1000 = () => {
  return (
    <div className={css1000.quantity}>
      <div className={css1000.quantity__header}>
        <div className={css1000.header__title}>Quantity</div>
      </div>
      <div className={css1000.quantity__body}>
        <div className={css1000.body__calculator}>
          <div className={css1000.body__box__icons}>
            <Icons.minus className={css1000.calculator__minus} />
          </div>
          <input className={css1000.calculator__input} type="number"  defaultValue={0}/>
          <div className={css1000.body__box__icons}>
            <Icons.plus className={css1000.calculator__plus} />
          </div>
        </div>
        <div className={css1000.body__description__products}>30 pieces available</div>
      </div>
    </div>
  );
};

export default QuantityProduct1000;

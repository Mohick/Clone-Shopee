import clsx from "clsx";
import { Icons } from "../../Container  Component  SVG ICON/Manage Icon";
import { handleBtnGrowOrDownBuyProduct, handleOnBlurQuantilyProducst } from "./handle_quantity__1000";
import css from "./quantity.module.scss"
import css1000 from "./quantity_1000.module.scss";
const QuantityProduct1000 = ({available}) => {
  return (
    <div className={clsx(css.quantity,css1000.quantity)}>
      <div className={css1000.quantity__header}>
        <div className={css1000.header__title}>Quantity</div>
      </div>
      <div className={css1000.quantity__body}>
        <div className={css1000.body__calculator}>
          <div
            className={css1000.body__box__icons}
            onClick={() => {
              handleBtnGrowOrDownBuyProduct(css1000, "prev");
            }}
          >
            <Icons.minus className={css1000.calculator__minus} />
          </div>
          <input
            className={css1000.calculator__input}
            type="number"
            defaultValue={1}
            onBlur={(e)=>{
              handleOnBlurQuantilyProducst(e.target,available)
            }}
          />
          <div
            className={css1000.body__box__icons}
            onClick={() => {
              handleBtnGrowOrDownBuyProduct(css1000, "next", available);
            }}
          >
            <Icons.plus className={css1000.calculator__plus} />
          </div>
        </div>
        <div className={css1000.body__description__products}>
          {available} pieces available
        </div>
      </div>
    </div>
  );
};

export default QuantityProduct1000;

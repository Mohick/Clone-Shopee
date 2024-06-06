import React, { useEffect } from "react";
import css from "./Introduce Products.module.scss";
import clsx from "clsx";
import CountDownTime from "../../Count  Down Time/Count  Down Time";
type rulesArray = {
  data: Array<any>;
};

const IntroduceProducts: React.FC<rulesArray> = (data:{data:object}) => {
  useEffect(() => {}, []);
  const getObjectData = data.data;
  const toObject: {
    priceDeFault: string;
    discount: string;
    sold: string;
  } = Object(getObjectData);

  return (
    <div className={clsx(css.introduce__products)}>
      <div className={clsx(css.layout,"layout")}>
        <div className={clsx(css.price)}>
          <div className={clsx(css.logo__flash__sale)}>
            <img
              width={"100%"}
              height={"100%"}
              src="./Flash Sale/flash-sale.png"
              alt=""
            />
          </div>
          <div className={clsx(css.cost)}>
            <span className={clsx(css.priceDeFault)}>
              ₫{toObject.priceDeFault}
            </span>
            <span className={clsx(css.discount)}>₫{toObject.discount}</span>
          </div>
        </div>
        <div className={clsx(css.sold__time)}>
          <div className={clsx(css.sold)}>{toObject.sold}</div>
          <div>
            <CountDownTime/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroduceProducts;

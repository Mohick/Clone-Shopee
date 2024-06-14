import clsx from "clsx";
import React from "react";
import css from ".//Relate_Product.module.scss";
import RenderItemsNeedSearch from "../../Result Search Items Page/Items Need Search/Render Items/Render Items";
import { useInView } from "react-intersection-observer";
type Props = {
  dataRelateProduct: {
    id: number;
    url: string;
    name: string;
    ads: boolean;
    discount: string;
    like: boolean;
    video: boolean;
    sold: string;
    sellingFash: boolean;
    cost: string;
    small: boolean;
    checkedFull: boolean;
    checkedFour: boolean;
    checkedThree: boolean;
    checkedTwo: boolean;
    checkedOne: boolean;
    voucher: string;
    start: string;
    shipTime: string;
    ShippedFrom: string;
    shippingOptions: string;
    brands: string;
    serviceAndPromotion: string;
    kind: string;
  }[];
};
const ReltesProduct = (Props: Props) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <div className={css.reltes__product} ref={ref}>
      {inView ? (
        <div className={clsx(css.layout, "layout")}>
          <div className={css.header}>
            <div className={css.header__title}>You May Also Like</div>
          </div>
          <div className={css.body}>
            <RenderItemsNeedSearch
              classSetWidth={css.body__items}
              data={Props.dataRelateProduct}
            />
          </div>
        </div>
      ) : undefined}
    </div>
  );
};

export default ReltesProduct;

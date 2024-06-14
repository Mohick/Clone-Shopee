import clsx from "clsx";
import React from "react";
import css from ".//Relate_Product.module.scss";
import css400 from "./Relate_Product_400.module.scss"
import css600 from "./Relate_Product_600.module.scss"
import css700 from "./Relate_Product_700.module.scss"
import css900 from "./Relate_Product_900.module.scss"
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
    <div className={clsx(css.reltes__product,css400.reltes__product,css600.reltes__product,css700.reltes__product,css900.reltes__product)} ref={ref}>
      {inView ? (
        <div className={clsx(css.layout,css400.layout,css600.layout,css700.layout,css900.layout, "layout")}>
          <div className={css.header}>
            <div className={css.header__title}>You May Also Like</div>
          </div>
          <div className={clsx(css.body,css400.body,css600.body,css700.body,css900.body)}>
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

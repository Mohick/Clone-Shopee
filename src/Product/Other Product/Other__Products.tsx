import React from "react";
import RenderItemsNeedSearch from "../../Result Search Items Page/Items Need Search/Render Items/Render Items";
import css from "./Other__Products.module.scss";
import css600 from "./other_products_600.module.scss"
import { Icons } from "../../Container  Component  SVG ICON/Manage Icon";
import clsx from "clsx";
type props = {
  otherProducts: [];
};

const OrtherProducts: React.FC<props> = (data: props) => {
  const renderData = data.otherProducts.slice(0, 4) as [];

  return (
    <div className={clsx(css.orther__products,css600.orther__products)}>
      <div className={clsx(css.layout,css600.layout, "layout")}>
        <div className={clsx(css.header)}>
          <div className={css.header__title}>From The Same Shop</div>
          <div className={css.header__show__more}>
            <span className={css.show__more__text}>See More</span>
            <Icons.arrowAngleRight className={css.show__more__icon} />
          </div>
        </div>
        <div className={css.body}>
          <div className={css.body__frame}>
            <RenderItemsNeedSearch data={renderData} lengthShow={Number(5)} classSetWidth={css.body__items} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrtherProducts;

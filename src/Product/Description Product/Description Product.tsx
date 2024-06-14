import clsx from "clsx";
import React from "react";
import css from "./Description Product.module.scss";
import css600 from "./description_product_600.module.scss"
import { Icons } from "../../Container  Component  SVG ICON/Manage Icon";
import { colapDescription } from "./handle__btn__show__more__description";
type descriptionProduct = string;

const DescriptionProduct = (data: { description: descriptionProduct }) => {
  const arrayString = data.description
    .replace(/<br\s*\/?>/g, "\n")
    .split("\n") as string[];

  return (
    <div className={clsx(css.description__product,css600.description__product)}>
      <div className={clsx(css.layout,css600.layout,"layout")}>
        <div className={clsx(css.header)}>
          <div className={clsx(css.header__title)}>Specification</div>
          <div className={clsx(css.header__btn__more)}>
            <span>Discount Stock,Other stocks</span>
            <Icons.arrowAngleRight className={clsx(css.arrow__icon)} />
          </div>
        </div>
        <div className={clsx(css.body)}>
          <div className={css.body__title}>Description</div>
          {arrayString.map((text,index) => {
            return (
              <React.Fragment key={index}>
                <br />
                {text}
              </React.Fragment>
            );
          })}
        </div>
        <div className={clsx(css.footer,css.show__more)} onClick={()=>{
          colapDescription(css)
        }}>
          <span className={clsx(css.footer__text__btn)}>See More</span>
          < Icons.arrowAngleDown  className={clsx(css.footer__icon__btn)}/>
        </div>
      </div>
    </div>
  );
};

export default DescriptionProduct;

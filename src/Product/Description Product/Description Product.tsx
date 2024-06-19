import clsx from "clsx";
import React from "react";
import css from "./Description Product.module.scss";
import css600 from "./description_product_600.module.scss";
import css1000 from "./description_product_1000.module.scss";
import { Icons } from "../../Container  Component  SVG ICON/Manage Icon";
import { colapDescription } from "./handle__btn__show__more__description";
type descriptionProduct = {
  arrayString: string;
  category: string[];
  Kind: string;
  discount: number | string;
  shipFrom: string;
};

const DescriptionProduct = (data: descriptionProduct) => {
  const arrayString = data.arrayString
    .replace(/<br\s*\/?>/g, "\n")
    .split("\n") as string[];

  return (
    <div
      className={clsx(
        css.description__product,
        css600.description__product,
        css1000.description__product
      )}
    >
      <div
        className={clsx(css.layout, css600.layout, css1000.layout, "layout")}
      >
        <div className={clsx(css.header, css1000.header)}>
          <div className={clsx(css.header__title, css1000.header__title)}>
            Products Specification
          </div>
          <div className={clsx(css1000.header__description)}>
            <div className={clsx(css1000.items__description)}>
              <div className={css1000.title__items}>Category</div>
              <div
                className={css1000.value__items}
                style={{ color: "#0055aa" }}
              >
                {data.category.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      {item}
                      {index !== data.category.length - 1 ? (
                        <Icons.arrowAngleRight
                          className={css1000.arrow__icon__items}
                        />
                      ) : undefined}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
            <div className={clsx(css1000.items__description)}>
              <div className={css1000.title__items}>Kind Product</div>
              <div className={css1000.value__items}> {data.Kind}</div>
            </div>
            <div className={clsx(css1000.items__description)}>
              <div className={css1000.title__items}> Discouunt Product </div>
              <div className={css1000.value__items}> {data.discount}%</div>
            </div>
            <div className={clsx(css1000.items__description)}>
              <div className={css1000.title__items}> Ship From </div>
              <div className={css1000.value__items}> {data.shipFrom}</div>
            </div>
          </div>
          <div
            className={clsx(css.header__btn__more, css1000.header__btn__more)}
          >
            <span>Discount Stock,Other stocks</span>
            <Icons.arrowAngleRight className={clsx(css.arrow__icon)} />
          </div>
        </div>
        <div className={clsx(css.body,css1000.body)}>
          <div className={clsx(css.body__title,css1000.body__title)}>Description</div>
          {arrayString.map((text, index) => {
            return (
              <React.Fragment key={index}>
                <br />
                {text}
              </React.Fragment>
            );
          })}
        </div>
        <div
          className={clsx(css.footer, css.show__more,css1000.show__more)}
          onClick={() => {
            colapDescription(css);
          }}
        >
          <span className={clsx(css.footer__text__btn)}>See More</span>
          <Icons.arrowAngleDown className={clsx(css.footer__icon__btn)} />
        </div>
      </div>
    </div>
  );
};

export default DescriptionProduct;

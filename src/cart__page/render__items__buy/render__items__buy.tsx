import React from "react";
import css from "./render__items__buy.module.scss";
import css1000 from "./render__items__buy__1000.module.scss";
import { Icons } from "../../Container  Component  SVG ICON/Manage Icon";
import { getCookie } from "typescript-cookie";
import clsx from "clsx";

type Props = {
  data: {
    name: string;
    url: string;
    price: string | number;
    quantity: string | number;
    total: string | number;
    cost: string | number;
  };
};

const RenderItemsIncart = (props: Props) => {
  const data = props.data;
  console.log(3);
  
  return (
    <div className={clsx(css.render__items__in__cart, css1000.render__items__in__cart)}>
      <div className={clsx(css.render__items__in__cart__header,css1000.render__items__in__cart__header)}>
        <div className={clsx(css.header__box__input, )}>
          <input className={clsx(css.header__input__checkbox)} type="checkbox" />
        </div>
        <Icons.store className={clsx(css.header__icon__store)} />
        <div className={clsx(css.box__name__shop)}>
          <span className={clsx(css.name__shop)}>Products</span>
          <Icons.chat className={clsx(css.icon__chat__shop)} />
        </div>
        <div className={clsx(css.box__btn__edit, css1000.box__btn__edit)}>
          <div className={clsx(css.btn__edit)}>Edit</div>
        </div>
      </div>

      <div className={clsx(css.render__items__in__cart__body, css1000.render__items__in__cart__body)}>
        <div className={clsx(css.body__info__products,css1000.body__info__products)}>
          <div className={clsx(css.body__box__input)}>
            <input className={clsx(css.body__input__checkbox)} type="checkbox" />
          </div>
          <div className={clsx(css.body__box__img)}>
            <img width={"100%"} height={"100%"} src={data.url} alt="" />
          </div>
          <div className={clsx(css.body__box__info__text,css1000.body__box__info__text)}>
            <div className={clsx(css.body__info__text__title)}>{data.name}</div>
            <div className={clsx(css.body__info__text__return,css1000.body__info__text__return)}>
              <span className={clsx(css.body__time__return,css1000.body__time__return)}>Change of Mind in 15 Days</span>
            </div>
            <div className={clsx(css.body__info__logo__voucher)}>
              <img width={"100%"} height={"100%"} src="./voucher__in__cart/voucher__in__cart.png" />
            </div>
          </div>
        </div>
        <div className={clsx(css.body__info__price__products, css1000.body__info__price__products)}>
          <div className={clsx(css.body__box__price__product, css1000.body__box__price__product)}>
            <div className={clsx(css.body__price__default)}>₫280.000</div>
            <div className={clsx(css.body__price__discount)}>₫{data.cost}</div>
          </div>
          <div className={clsx(css.body__box__amount__product, css1000.body__box__amount__product)}>
            <div className={clsx(css.body__box__edit__amount__product)}>
              <div className={clsx(css.body__box__btn__minus__product)}>
                <Icons.minus className={clsx(css.body__btn__minus__product)} />
              </div>
              <div className={clsx(css.body__box__input__product)}>
                <input className={clsx(css.body__input__number__product)} type="number" defaultValue={getCookie(data.name)} />
              </div>
              <div className={clsx(css.body__box__btn__plus__product)}>
                <Icons.plus className={clsx(css.body__btn__plus__product)} />
              </div>
            </div>
            <div className={clsx(css.body__amount__product)}>2 items left</div>
          </div>
          <div className={clsx(css.body__box__total__cost__product, css1000.body__box__total__cost__product)}>
            <div className={clsx(css.body__total__cost__product, css1000.body__total__cost__product)}>
              ₫ <span className={clsx(css.total__cost, css1000.total__cost)}>{(Number(data.cost) * 2).toFixed(3)}</span>
            </div>
          </div>
          <div className={clsx(css.body__box__btn__delete__product, css1000.body__box__btn__delete__product)}>
            <div className={clsx(css.body__btn__delete__product, css1000.body__btn__delete__product)}>Delete</div>
          </div>
        </div>
      </div>
      <div className={clsx(css.render__items__in__cart__footer, css1000.render__items__in__cart__footer)}>
        <div className={clsx(css.footer__options__voucher, css1000.footer__options__voucher)}>
          <Icons.voucher className={clsx(css.footer__icons__options__voucher)} />
          <div className={clsx(css.footer__description__options__voucher, css1000.footer__description__options__voucher)}>
            Up to ₫12k off voucher available
          </div>
          <div className={clsx(css.footer__box__btn__more__voucher, css1000.footer__box__btn__more__voucher)}>
            <div className={clsx(css.footer__box__btn__more__voucher, css1000.footer__box__btn__more__voucher)}>
              <div className={clsx(css.footer__btn__more__voucher, css1000.footer__btn__more__voucher)}>More Vouchers</div>
              <Icons.arrowAngleRight className={clsx(css.footer__icon__more__voucher, css1000.footer__icon__more__voucher)} />
            </div>
          </div>
        </div>
        <div className={clsx(css.footer__options__voucher, css1000.footer__options__voucher)}>
          <Icons.freeShip className={clsx(css.footer__icons__options__voucher)} />
          <div className={clsx(css.footer__description__options__voucher, css1000.footer__description__options__voucher)}>
            ₫300.000 off shipping on orders from ₫0; ₫500.000 off shipping on orders from ₫1.000.000
          </div>
          <div className={clsx(css.footer__box__btn__more__voucher, css1000.footer__box__btn__more__voucher)}>
            <div className={clsx(css.footer__btn__more__voucher, css1000.footer__btn__more__voucher)}>More Vouchers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderItemsIncart;

import React, { useEffect, useState } from "react";
import css from "./render__items__buy.module.scss";
import css1000 from "./render__items__buy__1000.module.scss";
import { Icons } from "../../Container  Component  SVG ICON/Manage Icon";
import { getCookie } from "typescript-cookie";
import clsx from "clsx";
import {
  check__an__items__input,
  check__box__items,
} from "../handle_dom_cart/handle_dom_cart";
import {
  handleOnBlurInput,
  handlePlusOrMinus,
} from "./handle__price__products/handle__price__products";
import {
  resultOfAllProductsHasChecked,
  saveOrRemoveSavePrice,
} from "../calculator_result_products_have__choose/caculato_result_products_have__choose";
import {
  handleBtnDelUnder1000px,
  handle__del__single__item,
} from "./handle__del__items/handle__del__items";

type Props = {
  data: {
    name: string;
    url: string;
    price: string | number;
    quantity: string | number;
    total: string | number;
    cost: string | number;
    available: string | number;
    costDefault: string | number;
  };
};

const RenderItemsIncart = (props: Props) => {
  const data = props.data;

  const [value, setValue] = useState<string | number>(
    `${getCookie(`${data.name}`)}`
  );

  useEffect(() => {}, [value]);
  return (
    <div
      className={clsx(
        css.render__items__in__cart,
        css1000.render__items__in__cart
      )}
    >
      <div
        className={clsx(
          css.render__items__in__cart__header,
          css1000.render__items__in__cart__header
        )}
      >
        <div className={clsx(css.header__box__input)}>
          <input
            className={clsx(css.header__input__checkbox)}
            type="checkbox"
            onClick={async (e) => {
              await check__box__items(e.target, css.render__items__in__cart);
              await saveOrRemoveSavePrice();
              await resultOfAllProductsHasChecked();
            }}
          />
        </div>
        <Icons.store className={clsx(css.header__icon__store)} />
        <div className={clsx(css.box__name__shop)}>
          <span className={clsx(css.name__shop)}>Products</span>
          <Icons.chat className={clsx(css.icon__chat__shop)} />
        </div>
        <div className={clsx(css.box__btn__edit, css1000.box__btn__edit)}>
          <div
            onClick={(e: { target: Element | any }) => {
              handleBtnDelUnder1000px(
                e.target,
                css.render__items__in__cart,
                css.btn__done,
                css.active__btn,
                css.render__items__in__cart__body,
                "edit"
              );
            }}
            className={clsx(css.btn__edit, css.active__btn)}
          >
            Edit
          </div>
          <div
            onClick={(e: { target: Element | any }) => {
              handleBtnDelUnder1000px(
                e.target,
                css.render__items__in__cart,
                css.btn__edit,
                css.active__btn,
                css.render__items__in__cart__body,
                "done"
              );
            }}
            className={clsx(css.btn__done)}
          >
            Done
          </div>
        </div>
      </div>

      <div
        className={clsx(
          css.render__items__in__cart__body,
          css1000.render__items__in__cart__body
        )}
      >
        <div
          className={clsx(
            css.body__info,
            "flex flex-col flex-grow-0 flex-shrink-0 basis-[100%] overflow-hidden"
          )}
        >
          <div
            className={clsx(
              css.body__info__products,
              css1000.body__info__products
            )}
          >
            <div className={clsx(css.body__box__input)}>
              <input
                name={data.name}
                onClick={async (e) => {
                  await check__an__items__input({
                    elementInput: e.target,
                    classNameBoxItems: css.render__items__in__cart,
                  });
                  await saveOrRemoveSavePrice();
                  await resultOfAllProductsHasChecked();
                }}
                className={clsx(css.body__input__checkbox)}
                type="checkbox"
              />
            </div>
            <div className={clsx(css.body__box__img)}>
              <img width={"100%"} height={"100%"} src={data.url} alt="" />
            </div>
            <div
              className={clsx(
                css.body__box__info__text,
                css1000.body__box__info__text
              )}
            >
              <div
                className={clsx(
                  css.body__info__text__title,
                  css1000.body__info__text__title
                )}
              >
                {data.name}
              </div>
              <div
                className={clsx(
                  css.body__info__text__return,
                  css1000.body__info__text__return
                )}
              >
                <span
                  className={clsx(
                    css.body__time__return,
                    css1000.body__time__return
                  )}
                >
                  Change of Mind in 15 Days
                </span>
              </div>
              <div className={clsx(css.body__info__logo__voucher)}>
                <img
                  width={"100%"}
                  height={"100%"}
                  src="./voucher__in__cart/voucher__in__cart.png"
                />
              </div>
            </div>
          </div>
          <div
            className={clsx(
              css.body__info__price__products,
              css1000.body__info__price__products
            )}
          >
            <div
              className={clsx(
                css.body__box__price__product,
                css1000.body__box__price__product
              )}
            >
              <div className={clsx(css.body__price__default)}>
                ₫{`${data.costDefault}`.createDotsNumber()}
              </div>
              <div className={clsx(css.body__price__discount)}>
                ₫{`${Number(data.cost)}`.createDotsNumber()}
              </div>
            </div>
            <div
              className={clsx(
                css.body__box__amount__product,
                css1000.body__box__amount__product
              )}
            >
              <div className={clsx(css.body__box__edit__amount__product)}>
                <div
                  className={clsx(css.body__box__btn__minus__product)}
                  onClick={async (e: { target: HTMLDivElement }) => {
                    await setValue(
                      handlePlusOrMinus(
                        e.target,
                        "minus",
                        data.name,
                        css.body__box__edit__amount__product,
                        css.body__input__number__product,
                        data.available
                      )
                    );
                    await saveOrRemoveSavePrice();
                    await resultOfAllProductsHasChecked();
                  }}
                >
                  <Icons.minus
                    className={clsx(css.body__btn__minus__product)}
                  />
                </div>
                <div className={clsx(css.body__box__input__product)}>
                  <input
                    className={clsx(css.body__input__number__product)}
                    type="number"
                    defaultValue={getCookie(data.name)}
                    name={data.name}
                    data-cost={data.cost}
                    onBlur={async (e) => {
                      await setValue(
                        handleOnBlurInput(
                          e.target.value,
                          data.name,
                          data.available,
                          e.target
                        )
                      );
                      await saveOrRemoveSavePrice();
                      await resultOfAllProductsHasChecked();
                    }}
                  />
                </div>
                <div
                  className={clsx(css.body__box__btn__plus__product)}
                  onClick={async (e: { target: HTMLDivElement }) => {
                    await setValue(
                      handlePlusOrMinus(
                        e.target,
                        "plus",
                        data.name,
                        css.body__box__edit__amount__product,
                        css.body__input__number__product,
                        data.available
                      )
                    );
                    await saveOrRemoveSavePrice();
                    await resultOfAllProductsHasChecked();
                  }}
                >
                  <Icons.plus className={clsx(css.body__btn__plus__product)} />
                </div>
              </div>
              <div className={clsx(css.body__amount__product)}>
                {" "}
                {data.available} Items
              </div>
            </div>
            <div
              className={clsx(
                css.body__box__total__cost__product,
                css1000.body__box__total__cost__product
              )}
            >
              <div
                className={clsx(
                  css.body__total__cost__product,
                  css1000.body__total__cost__product
                )}
              >
                ₫{" "}
                <span className={clsx(css.total__cost, css1000.total__cost)}>
                  {`${Number(data.cost) * Number(value)}`.createDotsNumber()}
                </span>
              </div>
            </div>
            <div
              className={clsx(
                css.body__box__btn__delete__product,
                css1000.body__box__btn__delete__product
              )}
            >
              <div
                onClick={() => {
                  handle__del__single__item(data.name);
                }}
                className={clsx(
                  css.body__btn__delete__product,
                  css1000.body__btn__delete__product
                )}
              >
                Delete
              </div>
            </div>
          </div>
        </div>
        <div
          className="p-[20px] bg-[tomato] flex items-center"
          onClick={() => {
            handle__del__single__item(data.name);
          }}
        >
          <div className="text-[#fff]">Delete</div>
        </div>
      </div>
      <div
        className={clsx(
          css.render__items__in__cart__footer,
          css1000.render__items__in__cart__footer
        )}
      >
        <div
          className={clsx(
            css.footer__options__voucher,
            css1000.footer__options__voucher
          )}
        >
          <Icons.voucher
            className={clsx(css.footer__icons__options__voucher)}
          />
          <div
            className={clsx(
              css.footer__description__options__voucher,
              css1000.footer__description__options__voucher
            )}
          >
            Up to ₫12k off voucher available
          </div>
          <div
            className={clsx(
              css.footer__box__btn__more__voucher,
              css1000.footer__box__btn__more__voucher
            )}
          >
            <div
              className={clsx(
                css.footer__box__btn__more__voucher,
                css1000.footer__box__btn__more__voucher
              )}
            >
              <div
                className={clsx(
                  css.footer__btn__more__voucher,
                  css1000.footer__btn__more__voucher
                )}
              >
                More Vouchers
              </div>
              <Icons.arrowAngleRight
                className={clsx(
                  css.footer__icon__more__voucher,
                  css1000.footer__icon__more__voucher
                )}
              />
            </div>
          </div>
        </div>
        <div
          className={clsx(
            css.footer__options__voucher,
            css1000.footer__options__voucher
          )}
        >
          <Icons.freeShip
            className={clsx(css.footer__icons__options__voucher)}
          />
          <div
            className={clsx(
              css.footer__description__options__voucher,
              css1000.footer__description__options__voucher
            )}
          >
            ₫300.000 off shipping on orders from ₫0; ₫500.000 off shipping on
            orders from ₫1.000.000
          </div>
          <div
            className={clsx(
              css.footer__box__btn__more__voucher,
              css1000.footer__box__btn__more__voucher
            )}
          >
            <div
              className={clsx(
                css.footer__btn__more__voucher,
                css1000.footer__btn__more__voucher
              )}
            >
              More Vouchers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderItemsIncart;

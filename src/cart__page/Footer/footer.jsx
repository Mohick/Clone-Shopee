import clsx from "clsx";
import css from "./footer.module.scss";
import css1000 from "./footer__1000.module.scss";
import { Icons } from "../../Container  Component  SVG ICON/Manage Icon";
import { getCookie, getCookies } from "typescript-cookie";
import { useEffect } from "react";
import { handleResizeCart, handleScrollFooterCart } from "./handle__scroll__footer";
const FooterCart = () => {
  useEffect(()=>{
   const setTime = setTimeout(() => {
    if(window.innerWidth > 1000) {
      const boxCartFooter = document.querySelector(`.${css1000.footer__cart__than__1000}`) 
      const boxLayoutFooter = boxCartFooter.querySelector(`.${css1000.footer__cart__than__1000__layout}`) 
      boxCartFooter.style.height = boxLayoutFooter.clientHeight + "px";
    }
   }, 0);
   window.addEventListener("resize", handleResizeCart)
    window.addEventListener("scroll", handleScrollFooterCart)
    
    return ()=>{
      clearTimeout(setTime)
   window.removeEventListener("resize", handleResizeCart)
   window.removeEventListener("scroll", handleScrollFooterCart)

    }
  },[])
  return (
    <div className={clsx(css.footer__cart__than__1000, css1000.footer__cart__than__1000)}>
    <div className={clsx(css.footer__cart__than__1000__layout, css1000.footer__cart__than__1000__layout, "layout")}>
        <div className={clsx(css.footer__items__select__voucher, css1000.footer__items__select__voucher)}>
            <div className={clsx(css.footer__box__apply__voucher, css1000.footer__box__apply__voucher)}>
                <div className={clsx(css.footer__box__title__icon, css1000.footer__box__title__icon)}>
                    <Icons.voucher className={clsx(css.footer__apply__voucher__icon, css1000.footer__apply__voucher__icon)} />
                    <div className={clsx(css.footer__apply__voucher__title, css1000.footer__apply__voucher__title)}>
                        Platform Voucher
                    </div>
                </div>
                <div className={clsx(css.footer__btn__open__modal__voucher, css1000.footer__btn__open__modal__voucher)}>
                    Select or enter code
                </div>
            </div>
        </div>
        <div className={clsx(css.footer__items__select__coin, css1000.footer__items__select__coin, css1000.disable)}>
            <div className={clsx(css.footer__box__apply__coin, css1000.footer__box__apply__coin)}>
                <div className={clsx(css.footer__box__check__title__description__icon, css1000.footer__box__check__title__description__icon)}>
                    <input className={clsx(css.footer__checkbox, css1000.footer__checkbox)} type="checkbox" />
                    <div className={clsx(css.footer__box__title__icon, css1000.footer__box__title__icon)}>
                        <Icons.coin className={clsx(css.footer__apply__coin__icon, css1000.footer__apply__coin__icon)} />
                        <div className={clsx(css.footer__apply__coin__title, css1000.footer__apply__coin__title)}>
                            Shop Coin
                        </div>
                        <div className={clsx(css.footer__apply__coin__description, css1000.footer__apply__coin__description)}>
                            No item selected
                            <span className={clsx(css.footer__apply__coin__description__icon, css1000.footer__apply__coin__description__icon)}>
                                <Icons.request />
                            </span>
                        </div>
                    </div>
                </div>
                <div className={clsx(css.footer__discount__with__coin, css1000.footer__discount__with__coin)}>-₫0</div>
            </div>
        </div>
        <div className={clsx(css.footer__items__buy__products, css1000.footer__items__buy__products)}>
            <div className={clsx(css.footer__box__selections, css1000.footer__box__selections)}>
                <input className={clsx(css.footer__input__checkbox, css1000.footer__input__checkbox)} type="checkbox" />
                <div className={clsx(css.footer__option__select__all, css1000.footer__option__select__all)}>
                    Select All ({getCookie("lengthCart")})
                </div>
                <div className={clsx(css.footer__option__del, css1000.footer__option__del)}>Delete</div>
                <div className={clsx(css.footer__option__del__all, css1000.footer__option__del__all)}>Remove inactive products</div>
                <div className={clsx(css.footer__option__go__like, css1000.footer__option__go__like)}>Move to My Likes</div>
            </div>
            <div className={clsx(css.footer__box__info__buy__product, css1000.footer__box__info__buy__product)}>
                <div className={clsx(css.footer_info__amount__products, css1000.footer_info__amount__products)}>
                    Total (<span className={clsx(css.footer_num__amount__products, css1000.footer_num__amount__products)}>0</span> item):
                </div>
                <div className={clsx(css.footer_info__cost__products, css1000.footer_info__cost__products)}>₫0</div>
                <div className={clsx(css.footer_info__btn__buy__products, css1000.footer_info__btn__buy__products)}>check out</div>
            </div>
        </div>
    </div>
</div>
  );
};

export default FooterCart;
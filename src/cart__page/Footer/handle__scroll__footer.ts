
import css1000 from "./footer__1000.module.scss"

const handleScrollFooterCart = () => {
    if (window.innerWidth < 1000) return;
    const boxLayoutFooter = document.querySelector(`.${css1000.footer__cart__than__1000__layout}`) as Element
    const windowClientsHeight = window.innerHeight - boxLayoutFooter.clientHeight as number
    const boxCartFooter = document.querySelector(`.${css1000.footer__cart__than__1000}`) as Element
    const heighFooter = boxCartFooter.getBoundingClientRect().top
    if (heighFooter < windowClientsHeight) {
        if (!boxLayoutFooter.classList.contains(css1000.active__fixed)) return;
        boxLayoutFooter.classList.remove(css1000.active__fixed)
    } else {
        if (boxLayoutFooter.classList.contains(css1000.active__fixed)) return;
        boxLayoutFooter.classList.add(css1000.active__fixed)
    }
}
const handleResizeCart = () => {
    if (window.innerWidth < 1000) {
        const boxCartFooter = document.querySelector(`.${css1000.footer__cart__than__1000}`) as HTMLElement
        boxCartFooter.style.height = `${0}px`;
    }else {
        const boxCartFooter = document.querySelector(`.${css1000.footer__cart__than__1000}`) as HTMLElement
        const boxLayoutFooter = boxCartFooter.querySelector(`.${css1000.footer__cart__than__1000__layout}`) as HTMLElement
        boxCartFooter.style.height = boxLayoutFooter.clientHeight + "px";
    }    
}


export { handleScrollFooterCart,handleResizeCart }
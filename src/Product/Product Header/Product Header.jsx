import clsx from "clsx";
import { Icons } from "../../Container  Component  SVG ICON/Manage Icon";
import Shopping from "../../Header/Shopping/Shopping";
import css from "./Product Header.module.scss"
import { useEffect } from "react";

const ProductHeaderMobi = function ({name}) {
    
    useEffect(()=>{
        const  boxHeader = document.getElementById('product__header')
        const setItems = setTimeout(() => {
            window.addEventListener('scroll', () => {

            })
        }, 0);
        return () => {
            clearTimeout(setItems);
        }
    },[])
    return <div className={clsx(css.product__header,"layout")}>
        <div className={clsx(css.btn__back__page)}>
            <Icons.arrowLeftHaveTail className={clsx(css.icon)}/>
        </div>
        <div className={clsx(css.name__product)}>
            {name}
        </div>
        <div className={clsx(css.btn__shopping)}>
            <Shopping className={clsx(css.icon)}/>
        </div>
        <div className={clsx(css.btn__mores)}>
            <Icons.menuThreeDots className={clsx(css.icon)}/>
        </div>
    </div>
}


export default ProductHeaderMobi;